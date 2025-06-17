import React, { useState } from 'react'
import './ProfilePage.css'
import {Img} from '../../components/ImageKit/Image'
import {Link} from 'react-router'
import Gallery from '../../components/Gallery/Gallery'
import Collections from '../../components/Collections/Collections'

const ProfilePage = () => {
  const [active,setActive]= useState('create');
  return (
    <div className='profilepage'>
      <div className="profileInfo">
      <Img src='/general/noAvatar.png' width='100' height='100'/>
      <h2 className='profile-author'>Subhodeep</h2>
      <div className='profile-username'>@subhodeep</div>
      <div>2 followers <span className='profile-dot'>&#x2022;</span> 4 following</div>
      <div className="profile-icons">
        <Link to='/'><Img className='profile-share' src='/general/share.svg' width='24' /></Link>
        <button>Message</button>
        <button>Follow</button>
        <Link to='/'><Img src='/general/more.svg' width='24'/></Link>
      </div>
      <div className="profile-show">
        <div className="profileShowImage">
        <span onClick={()=>setActive('create')} className={active==='create'? 'active' : ''}>Created</span>
        <span onClick={()=>setActive('saved')} className={active==='saved'?'active':''}>Saved</span>
        </div>
      </div>
        {active==='create'?(<Gallery/>):(<Collections/>)}
      </div>
    </div>
  )
}

export default ProfilePage