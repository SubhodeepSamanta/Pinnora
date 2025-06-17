import React from 'react'
import './MainLayout.css'
import {Outlet} from 'react-router'
import LeftBar from '../components/LeftBar/LeftBar'
import NavBar from '../components/NavBar/NavBar'

const MainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <NavBar />
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout