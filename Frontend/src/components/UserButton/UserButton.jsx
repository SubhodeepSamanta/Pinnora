import React, { useState } from 'react'
import './UserButton.css'

const UserButton = () => {
    
    const login=true;
    const [option,setOption]= useState(false);
  return (
    <div className='UserButton'>
        {login?(
            <>
            <img src="/general/noAvatar.png" alt="avatar" className='avatar'/>
            <img onClick={()=>setOption(o=>!o)} src="/general/arrow.svg" alt="" className='arrow'/>
            {option && <div className="options">
                <div className='option'>Profile</div>
                <div className='option'>Setting</div>
                <div className='option'>Logout</div>
            </div>
            }
            </>
        ):(
            <>
            <a href="/" className='login'> Login / Register </a>
            </>
        )}
    </div>
  )
}

export default UserButton