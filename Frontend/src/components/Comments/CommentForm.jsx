import EmojiPicker from "emoji-picker-react";
import React from "react";
import { useState } from "react";

const CommentForm = () => {
    const [showEmojiPicker,setShowEmojiPicker]=useState(false);
  return (
    <div className="comments-form">
      <input
        type="text"
        placeholder="Add a comment"
        className="input-comment"
      />
      <span className="emoji" onClick={() => setShowEmojiPicker((s) => !s)}>
        😊
      </span>
      {showEmojiPicker && (
        <div className="emoji-picker">
          <EmojiPicker />
        </div>
      )}
    </div>
  );
};

export default CommentForm;
