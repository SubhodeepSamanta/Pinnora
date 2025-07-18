import React from "react";
import { Img } from "../ImageKit/Image";
import { format } from "timeago.js";
import { Link } from "react-router";

const Comment = ({comment}) => {
  return (
    <div className="comment">
        <Link to={`/${comment.user.username}`}>
      <Img src={comment.user.img || "./general/noAvatar.png"} /></Link>
      <div className="comment-info">
        <Link to={`/${comment.user.username}`}>
        <span className="commentAuthor">{comment.user.displayName}</span></Link>
        <p className="comment-text">
          {comment.description}
        </p>
        <span className="comment-time">{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;
