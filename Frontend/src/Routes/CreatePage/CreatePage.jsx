import React, { useEffect, useState } from "react";
import { Img } from "../../components/ImageKit/Image";
import "./CreatePage.css";
import useAuthStore from "../../utils/authStore";
import { useNavigate } from "react-router";
import Editor from "../../components/Editor/Editor";

const CreatePage = () => {
  const { currentUser } = useAuthStore();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [previewImg,setPreviewImg]= useState({
    url:'',
    width:0,
    height:0
  })
  const [isEditing, setIsEditing]= useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [navigate, currentUser]);

  useEffect(()=>{
    if(file){
    const img= new Image();
    img.src= URL.createObjectURL(file);
    img.onload= ()=>{
    setPreviewImg({
      url: img.src,
      width: img.width,
      height: img.height
    })}
    }
  },[file])


  return (
    <div className={isEditing ? 'createpage' : 'createpage no-edit'}>
      <div className="topbar">
        <h1>{isEditing ? 'Editing' : 'Create Pin'}</h1>
        <button className="publish">{isEditing ? 'Done' : 'Publish'}</button>
      </div>
    {isEditing ? <Editor previewImg={previewImg}/> : (
      <>
      <div className="create-bottom">
        {previewImg.url ? (
          <div onClick={()=>setIsEditing(e=>!e)} className="previewImg">
            <img src={previewImg.url} alt="" />
            <Img className='edit-icon' src='/general/edit.svg' />
          </div>
        ) : (
          <label htmlFor="file" className="upload">
            <div className="upload-info">
              <Img src="/general/upload.svg" width={50} />
              <span>Choose a file</span>
            </div>
            <span className="upload-instructions">
              We recommend using high quality .jpg files less than 20MB or .mp4
              files less than 200MB
            </span>
          </label>
        )}
        <input
          type="file"
          id="file"
          hidden
          onChange={(e) => setFile(e.target.files[0])}
        />
        <form action="" className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">
              Title
              <input
                type="text"
                placeholder="Add a title"
                name="title"
                id="title"
              />
            </label>
          </div>
          <div className="createFormItem">
            <label htmlFor="description">
              Description
              <textarea
                type="text"
                placeholder="Add a detailed description"
                rows={6}
                name="description"
                id="description"
              />
            </label>
          </div>
          <div className="createFormItem">
            <label htmlFor="link">
              Link
              <input
                type="text"
                placeholder="Add a Link"
                name="link"
                id="link"
              />
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
              <input type="text" placeholder="Add Tags" name="tags" id="tags" />
              <small>Don&apos;t worry people won&apos;t see your tags</small>
            </label>
          </div>
        </form>
      </div>
        </>
    )}
    </div>
  );
};

export default CreatePage;
