import React from 'react'

import './LoginSignup.css'

import user_icon from '../Assets/user-icon.png'
import email_icon from '../Assets/email-icon.jpg'
import password_icon from '../Assets/password-icon.png'

const ForgotPassword = () => {
  return (
    <>
    <div className="heading"><h1>Resseting your password!</h1></div>
    <div className='container'>
      <div className="header">
        <div className="text">Password Reset</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Enter Email Id' />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Enter New Password' />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Comfirm Password' />
        </div>
      </div>
      
      <div className="submit-container">
        <div className="submit">Reset</div>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword
