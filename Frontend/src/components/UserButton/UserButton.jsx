import React, { useState } from 'react'
import { Img } from '../ImageKit/Image';
import { Link } from 'react-router';
import './UserButton.css'

const UserButton = () => {
    
    const login=true;
    const [option,setOption]= useState(false);
  return (
    <div className='UserButton'>
        {login?(
            <>
            <Img src="/general/noAvatar.png" alt="avatar" className='avatar'/>
            <Img  onClick={()=>setOption(o=>!o)} src="/general/arrow.svg" alt="" className='arrow'/>
            {option && <div className="options">
                <Link to='/subhodeep'><div className='option'>Profile</div></Link>
                <Link to='/auth'><div className='option'>Setting</div></Link>
                <Link to='/auth'><div className='option'>Logout</div></Link>
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