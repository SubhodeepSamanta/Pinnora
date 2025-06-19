import React from 'react'
import {Img} from '../../components/ImageKit/Image'
import {Link, useParams} from 'react-router'
import './PostPage.css'
import PostInteractions from '../../components/PostInteractions/PostInteractions'
import Comments from '../../components/Comments/Comments'
import {useQuery} from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest'

const PostPage = () => {
  const {id} = useParams();
  const {isPending,error,data}= useQuery({
    queryKey:['pin',id],
    queryFn: async () =>{ 
      const response= await apiRequest.get(`/pins/${id}`);
      return response.data;
    }
  })
  if(isPending) return "Loading...";
  if(error) return "An error has occured: "+error.message;
  if(!data) return "Something went wrong"
  
  return (
    <div className='postpage'>
      <Link to='/' className='back-arrow'>
      <Img src='/general/back.svg' width='36'/>
      </Link>
      <div className="post-container">
        <div className="post-img">
          <Img src={data.media} width='762'/>
        </div>
        <div className="post-info">
          <PostInteractions username={data.user.username} img={data.user.img} displayName={data.user.displayName}/>
          <Comments id={data._id}/>
        </div>
      </div>
    </div>
  )
}

export default PostPage