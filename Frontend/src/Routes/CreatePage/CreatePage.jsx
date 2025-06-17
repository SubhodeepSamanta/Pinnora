import React from 'react'
import { Img } from '../../components/ImageKit/Image'
import './CreatePage.css'

const CreatePage = () => {
  return (
    <div className='createpage'> 
    <div className="topbar">
      <h1>Create Pin</h1>
      <button className='publish'>Publish</button>
    </div>
    <div className="create-bottom">
      <div className="upload">
        <div className="upload-info">
        <Img src='/general/upload.svg' width={50}/>
        <span>Choose a file</span>
        </div>
        <span className='upload-instructions'>We recommend using high quality .jpg files less than 20MB or .mp4 files less than 200MB</span>
      </div>
      <form action="" className='createForm'>
        <div className="createFormItem">
          <label htmlFor="title">
            Title
            <input type="text" placeholder='Add a title' name='title' id='title'/>
          </label>
        </div>
        <div className="createFormItem">
          <label htmlFor="description">
            Description
            <textarea type="text" placeholder='Add a detailed description' rows={6} name='description' id='description'/>
          </label>
        </div>
        <div className="createFormItem">
          <label htmlFor="link">
            Link
            <input type="text" placeholder='Add a Link' name='link' id='link'/>
          </label>
        </div>
        <div className="createFormItem">
          <label htmlFor="board">
            Board
            <select name="board" id="board">
              <option>Choose a Board</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </label>
        </div>
        <div className="createFormItem">
          <label htmlFor="tags">
            Tagged Topics
            <input type="text" placeholder='Add Tags' name='tags' id='tags'/>
            <small>Don&apos;t worry people won&apos;t see your tags</small>
          </label>
        </div>
      </form>
    </div>
    </div>
  )
}

export default CreatePage