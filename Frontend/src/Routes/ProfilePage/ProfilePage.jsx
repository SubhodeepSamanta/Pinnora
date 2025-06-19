import React, { useState } from 'react'
import './ProfilePage.css'
import {Img} from '../../components/ImageKit/Image'
import {Link, useParams} from 'react-router'
import Gallery from '../../components/Gallery/Gallery'
import { useQuery } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest.js'
import Boards from '../../components/Boards/Boards.jsx'

const ProfilePage = () => {
  const [active,setActive]= useState('create');
  const {username}= useParams();
  const {isPending, data, error}= useQuery({
    queryKey: ['profile',username],
    queryFn: async () =>{ 
      const response= await apiRequest.get(`/users/${username}`);
      return response.data;
    }
  })
  if(isPending) return 'Loading...';
  if(error) return 'An error has occured'+error.message;
  if(!data) return 'User not found';

  return (
    <div className='profilepage'>
      <div className="profileInfo">
      <Img src={data.img || '/general/noAvatar.png'} width='100' height='100'/>
      <h2 className='profile-author'>{data.displayName}</h2>
      <div className='profile-username'>{data.username}</div>
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
        {active==='create'?(<Gallery userId={data._id}/>):(<Boards userId={data._id} />)}
      </div>
    </div>
  )
}

export default ProfilePage