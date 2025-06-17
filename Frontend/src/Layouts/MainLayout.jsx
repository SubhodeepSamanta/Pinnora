import React from 'react'
import './MainLayout.css'
import {Outlet} from 'react-router'
import LeftBar from '../components/LeftBar/LeftBar'
import TopBar from '../components/temp/temp'

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