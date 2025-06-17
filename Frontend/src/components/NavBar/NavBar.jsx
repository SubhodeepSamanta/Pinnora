import React from 'react'
import './NavBar.css'
import UserButton from '../UserButton/UserButton'
import { Img } from '../ImageKit/Image'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className="search">
        <Img src="/general/search.svg" alt="" className="img" height="36px" width="36px" />
        <input type="text" placeholder='Search'/>
      </div>
      <UserButton/>
    </div>
  )
}

export default NavBar