import React, { useState } from 'react'
import { Img } from '../ImageKit/Image';
import { Link, useNavigate } from 'react-router';
import './UserButton.css'
import apiRequest from '../../utils/apiRequest';
import useAuthStore from '../../utils/authStore';

const UserButton = () => {
    
    const [option,setOption]= useState(false);
    const navigate= useNavigate();
    const {currentUser, removeCurrentUser}= useAuthStore();

    const handleLogout= async(req,res)=>{
        try{
            await apiRequest.post('/users/auth/logout',{});
            removeCurrentUser();
            navigate('/auth');
        }catch(err){
            console.error(err.response.data);
        }
    }

  return (
    <div className='UserButton'>
        {currentUser?(
            <>
            <Img src={currentUser.img || "/general/noAvatar.png"} alt="avatar" className='avatar'/>
            <Img  onClick={()=>setOption(o=>!o)} src="/general/arrow.svg" alt="" className='arrow'/>
            {option && <div className="options">
                <Link to={currentUser.username}><div className='option'>Profile</div></Link>
                <Link to={`/${currentUser.username}`}><div className='option'>Setting</div></Link>
                <div onClick={handleLogout}><div className='option'>Logout</div></div>
            </div>
            }
            </>
        ):(
            <>
            <Link to="/auth" className='login'> Login / Register </Link>
            </>
        )}
    </div>
  )
}

export default UserButton