import React from 'react'
import './LeftBar.css'
import { Img } from '../ImageKit/Image'
import {Link} from 'react-router'

const LeftBar = () => {
  return (
    <div className='leftBar'>
    <div className="menuIcons">
      <Link to="/" className='menuIcon'>
        <Img src="/general/logo.png" alt="" className='logo' height="36px" width="36px" />
      </Link>
      <Link to="/" className='menuIcon'>
        <Img src="/general/home.svg" alt="" height="20px" width="20px"  />
      </Link>
      <Link to="/create" className='menuIcon'>
        <Img src="/general/create.svg" alt="" height="20px" width="20px"  />
      </Link>
      <Link to="/" className='menuIcon'>
        <Img src="/general/updates.svg" alt="" height="20px" width="20px"  />
      </Link>
      <Link to="/" className='menuIcon'>
        <Img src="/general/messages.svg" alt="" height="20px" width="20px"  />
      </Link>
    </div>
      <Link to="/" className='menuIcon'>
        <Img src="/general/settings.svg" alt="" height="20px" width="20px" />
      </Link>
      </div>
  )
}

export default LeftBar