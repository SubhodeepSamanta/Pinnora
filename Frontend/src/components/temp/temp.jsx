import React from 'react'
import './TopBar.css'
import UserButton from '../UserButton/UserButton'
import { Img } from '../ImageKit/Image'

const TopBar = () => {
  return (
    <div className='TopBar'>
      <div className="search">
        <Img src="/general/search.svg" alt="" className="img" height="36px" width="36px" />
        <input type="text" placeholder='Search'/>
      </div>
      <UserButton/>
    </div>
  )
}

export default TopBar