import React from 'react'
import './NavBar.css'
import UserButton from '../UserButton/UserButton'
import { Img } from '../ImageKit/Image'
import { useNavigate } from 'react-router'

const NavBar = () => {
  const navigate= useNavigate();
  const handleSubmit= (e)=>{
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`)
  }

  return (
    <div className='NavBar'>
      <form onSubmit={handleSubmit} className="search">
        <Img src="/general/search.svg" alt="" className="img" height="36px" width="36px" />
        <input type="text" placeholder='Search'/>
      </form>
      <UserButton/>
    </div>
  )
}

export default NavBar