import React, { useState } from "react";
import { Img } from "../../components/ImageKit/Image";
import {Link} from 'react-router'
import './AuthPage.css'

const AuthPage = () => {
  const [isRegister,setIsRegister]= useState(false);
  const [error,setError]= useState(false);
  return (
    <div className="authpage">
      <div className="loginpage">
        <Link to='/'><Img src="/general/logo.png" width="50" /></Link>
        <h1>{isRegister?'Register your' : 'Login to your'} account</h1>
        {isRegister ?
        (<form action="" key='register-form'>
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
          {error && <span className="error"> error message </span>}
          <span className="form-switch" onClick={()=>setIsRegister(i=>!i)} >Don&apos;t have an account? <b>Login</b></span>
        </form>)
        :
        (<form action="" key='login-form'>
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
          {error && <span className="error"> error message </span>}
          <span onClick={()=>setIsRegister(i=>!i)} className="form-switch" >Don&apos;t have an account? <b>Register</b></span>
        </form>)
}
      </div>
    </div>
  );
};

export default AuthPage;
