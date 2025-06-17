import React from 'react'
import './MainLayout.css'
import {Outlet} from 'react-router'
import LeftBar from '../components/LeftBar/LeftBar'

const MainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout