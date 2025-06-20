import React, { useState } from "react";
import { Img } from "../../components/ImageKit/Image";
import {Link, useNavigate} from 'react-router'
import './AuthPage.css'
import apiRequest from "../../utils/apiRequest.js";
import useAuthStore from "../../utils/authStore.js";

const AuthPage = () => {
  const [isRegister,setIsRegister]= useState(false);
  const [error,setError]= useState("");
  const navigate= useNavigate();
  const {currentUser, setCurrentUser}= useAuthStore();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const formdata= new FormData(e.target);
    const data= Object.fromEntries(formdata);
    try{
    const user= await apiRequest.post(`/users/auth/${isRegister? "register" : "login"}`,data);
    setCurrentUser(user.data);
    navigate('/');
    }catch(err){
      console.error(err.response.data);
      setError(`${err.response.data}`);
    }
  }


  return (
    <div className="authpage">
      <div className="loginpage">
        <Link to='/'><Img src="/general/logo.png" width="50" /></Link>
        <h1>{isRegister?'Register your' : 'Login to your'} account</h1>
        {isRegister ?
        (<form action="" key='register-form' onSubmit={handleSubmit}>
          <div className="register-input">
            <label htmlFor="name">
              Name
              <input type="name" name="name" id="name" placeholder="Name" />
            </label>
          </div>
          <div className="register-input">
            <label htmlFor="username">
              Username
              <input type="username" name="username" id="username" placeholder="Username" />
            </label>
          </div>
          <div className="register-input">
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" placeholder="Email" />
            </label>
          </div>
          <div className="register-input">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </label>
          </div>
          <button className="auth-button">Register</button>
          {error && <span className="error"> {error} </span>}
          <span className="form-switch" onClick={()=>setIsRegister(i=>!i)} >Don&apos;t have an account? <b>Login</b></span>
        </form>)
        :
        (<form action="" key='login-form' onSubmit={handleSubmit}>
          <div className="login-input">
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" placeholder="Email" />
            </label>
          </div>
          <div className="login-input">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                />
            </label>
          </div>
          <button className="auth-button">Login</button>
          {error && <span className="error"> {error} </span>}
          <span onClick={()=>setIsRegister(i=>!i)} className="form-switch" >Don&apos;t have an account? <b>Register</b></span>
        </form>)
}
      </div>
    </div>
  );
};

export default AuthPage;
