import React from 'react'
import './TopBar.css'
import UserButton from '../UserButton/UserButton'

const TopBar = () => {
  return (
    <div className='TopBar'>
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search'/>
      </div>
      <UserButton/>
    </div>
  )
}

export default TopBar