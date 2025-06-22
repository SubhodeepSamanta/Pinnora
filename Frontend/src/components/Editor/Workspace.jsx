import React, { useEffect, useRef } from 'react'
import { Img } from '../ImageKit/Image'
import useEditorStore from '../../utils/useEditorStore'

const Workspace = ({previewImg}) => {
  const {textOptions, setTextOptions, setSelectedLayer, canvasOptions, setCanvasOptions}= useEditorStore();
  const handleDelete= ()=>{
    setTextOptions({...textOptions, text: ""});
  }

  useEffect(()=>{
    if(canvasOptions.height===0){
      const newHeight= (375 * previewImg.height) / previewImg.width;
      setCanvasOptions({
        ...canvasOptions,
        height: newHeight,
        orientation: newHeight > 375 ? "portrait" : "landscape"
      }) 
    }
  },[previewImg, canvasOptions, setCanvasOptions]);

  const itemRef= useRef();
  const dragging= useRef(false);
  const containerRef= useRef();
  const offset= useRef({x:0 , y:0});

  const handleMouseUp= (e)=>{
   dragging.current=false; 
  }
  const handleMouseDown= (e)=>{
    setSelectedLayer("text");
    dragging.current=true;
    offset.current={
      x: e.clientX - textOptions.left,
      y: e.clientY - textOptions.top
    }
  }
  const handleMouseLeave= (e)=>{
   dragging.current=false; 
  }
  const handleMouseMove= (e)=>{
   if(!dragging.current) return;
   setTextOptions({
    ...textOptions,
    top: e.clientY - offset.current.y,
    left: e.clientX - offset.current.x
   })
  }

  return (
    <div className='workspace'>
      <div ref={containerRef} className="canvas" style={{height: canvasOptions.height, backgroundColor: canvasOptions.backgroundColor}} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp}>
        <img src={previewImg.url} />
        {
          textOptions.text ? 
          <div className="add-text" style={{top: `${textOptions.top}px`, left: `${textOptions.left}px`, fontSize: `${textOptions.fontSize}px` }}>
            <input ref={itemRef} onMouseDown={handleMouseDown} style={{color: `${textOptions.color}`}} type="text" value={textOptions.text} onChange={(e)=> setTextOptions({...textOptions,text: e.target.value}) }/>
            <span onClick={handleDelete}><Img className='text-delete' src='general/delete.svg' /></span>
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default Workspace