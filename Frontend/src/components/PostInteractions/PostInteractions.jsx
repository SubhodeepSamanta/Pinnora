import React from 'react'
import './PostInteractions.css'
import { Img } from '../ImageKit/Image'
import {Link} from 'react-router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest'

const interact= async (id,type)=>{
    const response= await apiRequest.post(`/pins/interaction/${id}`, {type});
    return response.data;
}

const PostInteractions = ({username,img,displayName,postId}) => {

    const queryClient= useQueryClient();
    const mutation= useMutation({
        mutationFn:  ({id,type})=> interact(id,type),
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['interactionCheck',postId]})
        }
    })

    const {isPending,error,data}= useQuery({
        queryKey:['interactionCheck',postId],
        queryFn: async () =>{ 
          const response= await apiRequest.get(`/pins/interaction-check/${postId}`);
          return response.data;
        }
      })
      if(isPending) return "Loading...";
      if(error) return "An error has occured: "+error.message;
      if(!data) return "Something went wrong"
  return (
    <>
    <div className='postInteractions'>
        <div className="interactions">
        <span onClick={()=>mutation.mutate({id:postId,type:"like"})}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill={data.isLiked? "#e50829" : "none" } xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
        stroke={data.isLiked? "#e50829" : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        </svg>
        {data.likeCount}</span>
        <Link to='/'>
        <Img src='/general/share.svg' width='24'/>
        </Link>
        <Link to='/'>
        <Img src='/general/more.svg' width='24'/>
        </Link>
        <button className='save' onClick={()=>mutation.mutate({id:postId,type:"save"})}>{data.isSaved ? "Saved" : "Save"}</button>
        </div>
    </div>
        <div className="author">
            <Link to={`/${username}`}>
                <Img src={img || '/general/noAvatar.png'} width='28'/>
                <span>{displayName}</span>
            </Link>
        </div>
        </>
  )
}

export default PostInteractions