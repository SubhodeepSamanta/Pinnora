import React from 'react'
import './PostInteractions.css'
import { Img } from '../ImageKit/Image'
import {Link} from 'react-router'

const PostInteractions = ({username,img,displayName}) => {
  return (
    <>
    <div className='postInteractions'>
        <div className="interactions">
        <Img src='/general/react.svg' width='28'/>
        <span>273</span>
        <Link to='/'>
        <Img src='/general/share.svg' width='24'/>
        </Link>
        <Link to='/'>
        <Img src='/general/more.svg' width='24'/>
        </Link>
        <button className='save'>Save</button>
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