import React, { useState } from 'react'
import { Img } from '../ImageKit/Image'
import useEditorStore from '../../utils/useEditorStore'

const Layers = () => {
    const {selectedLayer, setSelectedLayer,textOptions, addText}= useEditorStore();

    const handleSelectedLayer= (layer)=>{
        setSelectedLayer(layer);
        if(layer==='text' && selectedLayer==='text') addText();
    }

  return (
    <div className='layers'>
        <div className="layers-title">
            <h3>Layers</h3>
            <p>Select a layer to edit</p>
        </div>
        <div className="layers-section">
            <div onClick={()=>handleSelectedLayer("text")} className={`layer ${selectedLayer==='text'? "selected": ""}`}>
                <Img src='/general/text.png' width={45}/>
                <p>Add Text</p>
            </div>
            <div onClick={()=>handleSelectedLayer("canvas")} className={`layer ${selectedLayer==='canvas'? "selected" : ""}`}>
                <div className="canvas-layer" style={{backgroundColor:"teal"}}></div>
                <p>Canvas</p>
            </div>
        </div>
    </div>
  )
}

export default Layers