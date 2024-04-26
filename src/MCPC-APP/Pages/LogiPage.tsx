import React from 'react'
import './LoginPage.css'
const LogiPage = () => {
    return (
        <div className='Login'>
            <h1 className="header">LOGIN</h1>
            <p className="subtext">Please login to my app</p>
            <div className="input-container">
                <input type="text" placeholder="Username" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <button className='login-button'>Login Now</button>
            </div>
            <div>
                <p style={{ fontSize: '18px', marginTop: '23px', marginBottom: '13px' }}><b>Login</b> with Others</p>
                <button className='google-button'><img src='./google.png' />Login with  <b> Google</b></button>
                <button className='google-button'><img src='./facebook.png' />Login with  <b> Facebook</b></button>
            </div>
        </div>
    )
}

export default LogiPage
