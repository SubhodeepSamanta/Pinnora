import React, { useState } from 'react'
import './Comments.css'
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = ({id}) => {

    const {isPending,error,data}= useQuery({
        queryKey:['comments',id],
        queryFn: async () =>{ 
          const response= await apiRequest.get(`/comments/${id}`);
          return response.data;
        }
      })
      if(isPending) return "Loading...";
      if(error) return "An error has occured: "+error.message;
      if(!data) return "No comments"
      
  return (
    <div className='comments'>
        <span className='total-comments'>{data.length===0 ? "No Comments" : data.length===1? '1 Comment': `${data.length} Comments`}</span>
        <div className="comments-list">
            {data.map((comment)=>(
            <Comment key={comment._id} comment={comment} />
            ))}
        </div>
        <CommentForm id={id}/>
    </div>
  )
}

export default Comments