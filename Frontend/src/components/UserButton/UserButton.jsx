import React, { useState } from 'react'
import { Img } from '../ImageKit/Image';
import { Link, useNavigate } from 'react-router';
import './UserButton.css'
import apiRequest from '../../utils/apiRequest';

const UserButton = () => {
    
    const login=true;
    const [option,setOption]= useState(false);
    const navigate= useNavigate();

    const handleLogout= async(req,res)=>{
        try{
            await apiRequest.post('/users/auth/logout',{});
            navigate('/auth');
        }catch(err){
            console.error(err.response.data);
        }
    }

  return (
    <div className='UserButton'>
        {login?(
            <>
            <Img src="/general/noAvatar.png" alt="avatar" className='avatar'/>
            <Img  onClick={()=>setOption(o=>!o)} src="/general/arrow.svg" alt="" className='arrow'/>
            {option && <div className="options">
                <Link to='/subhodeep'><div className='option'>Profile</div></Link>
                <Link to='/auth'><div className='option'>Setting</div></Link>
                <div onClick={handleLogout}><div className='option'>Logout</div></div>
            </div>
            }
            </>
        ):(
            <>
            <Link to="/" className='login'> Login / Register </Link>
            </>
        )}
    </div>
  )
}

export default UserButton