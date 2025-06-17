import React from 'react'
import {Img} from '../../components/ImageKit/Image'
import {Link} from 'react-router'
import './PostPage.css'
import PostInteractions from '../../components/PostInteractions/PostInteractions'
import Comments from '../../components/Comments/Comments'

const PostPage = () => {
  return (
    <div className='postpage'>
      <Link to='/' className='back-arrow'>
      <Img src='/general/back.svg'width='36'/>
      </Link>
      <div className="post-container">
        <div className="post-img">
          <Img src='/pins/pin1.jpeg'width='762'/>
        </div>
        <div className="post-info">
          <PostInteractions/>
          <Comments/>
        </div>
      </div>
    </div>
  )
}

export default PostPage