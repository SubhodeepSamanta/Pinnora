import React, { useState } from 'react'
import './Comments.css'
import EmojiPicker from 'emoji-picker-react';
import { Img } from '../ImageKit/Image';

const Comments = () => {
    const [showEmojiPicker,setShowEmojiPicker]=useState(false);
  return (
    <div className='comments'>
        <span className='total-comments'>5 Comments</span>
        <div className="comments-list">
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
            <div className="comment">
                <Img src='./general/noAvatar.png'/>
                <div className="comment-info">
                    <span className='commentAuthor'>Subhodeep</span>
                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quod nisi eaque</p>
                    <span className='comment-time'>1h</span>
                </div>
            </div>
        </div>
        <div className="comments-form">
            <input type="text" placeholder='Add a comment' className='input-comment'/>
            <span className='emoji' onClick={()=>setShowEmojiPicker(s=>!s)}>😊</span>
            {showEmojiPicker && <div className="emoji-picker">
                <EmojiPicker />
            </div>}
        </div>
    </div>
  )
}

export default Comments