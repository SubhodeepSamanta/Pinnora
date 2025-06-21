import React from 'react'
import { Img } from '../ImageKit/Image'
import useEditorStore from '../../utils/useEditorStore'

const Workspace = ({previewImg}) => {
  const {textOptions, setTextOptions}= useEditorStore();
  const handleDelete= ()=>{
    setTextOptions({...textOptions, text: ""});
  }
  return (
    <div className='workspace'>
      <div className="canvas">
        <img src={previewImg.url} />
        {
          textOptions.text ? 
          <div className="add-text" style={{top: `${textOptions.top}px`, left: `${textOptions.left}px`, fontSize: `${textOptions.fontSize}px` }}>
            <input style={{color: `${textOptions.color}`}} type="text" value={textOptions.text} onChange={(e)=> setTextOptions({...textOptions,text: e.target.value}) }/>
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