import React, { useState } from 'react'
import './UserButton.css'
import { Img } from '../ImageKit/Image';
import { Link } from 'react-router';

const UserButton = () => {
    
    const login=true;
    const [option,setOption]= useState(false);
  return (
    <div className='UserButton'>
        {login?(
            <>
            <Img src="/general/noAvatar.png" alt="avatar" className='avatar'/>
            <Img onClick={()=>setOption(o=>!o)} src="/general/arrow.svg" alt="" className='arrow'/>
            {option && <div className="options">
                <div className='option'>Profile</div>
                <div className='option'>Setting</div>
                <div className='option'>Logout</div>
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