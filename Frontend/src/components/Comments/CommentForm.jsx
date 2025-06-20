import EmojiPicker from "emoji-picker-react";
import React from "react";
import { useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CommentForm = ({id}) => {
    const [showEmojiPicker,setShowEmojiPicker]=useState(false);
    const [desc, setDesc]= useState("");

    const addComment= async(comment)=>{
      await apiRequest.post('/comments',comment);
    }

    const queryClient= useQueryClient();

    const mutation = useMutation({
        mutationFn: addComment,
        onSuccess: ()=>{
          queryClient.invalidateQueries({ queryKey: ['comments',id] }),
          setDesc("");
          setShowEmojiPicker(false);
        }
  })


    const handleEmojiClick= (emoji)=>{
      setDesc((d)=> d + " " + emoji.emoji);
      setShowEmojiPicker(false);
    }

    const handleCommentSubmit= async (e)=>{
      e.preventDefault();
      mutation.mutate({
        description: desc,
        pin: id
      })
    }

  return (
    <form className="comments-form" onSubmit={handleCommentSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        className="input-comment"
        value={desc}
        onChange={(e)=>setDesc(e.target.value)}
      />
      <span className="emoji" onClick={() => setShowEmojiPicker((s) => !s)}>
        😊
      </span>
      {showEmojiPicker && (
        <div className="emoji-picker">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </form>
  );
};

export default CommentForm;
