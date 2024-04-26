import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    // State to store username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // State to store whether login button is clicked
    const [isLogged, setIsLogged] = useState(false);

    // Function to handle changes in username input
    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    };

    // Function to handle changes in password input
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    // Function to handle login button click
    const handleLogin = () => {
        // Here you can perform login authentication using username and password
        // For now, let's just log them to console
        setIsLogged(true);
    };

    return (
        <div className='Login'>
            <h1 className="header">LOGIN</h1>
            <p className="subtext">Please login to my app</p>
            <div className="input-container">
                <input type="text" placeholder="Username" className="input-field" value={username} onChange={handleUsernameChange} />
                <input type="password" placeholder="Password" className="input-field" value={password} onChange={handlePasswordChange} />
                <button className='login-button' onClick={handleLogin}>Login Now</button>
            </div>
            <div>
                <p style={{ fontSize: '18px', marginTop: '23px', marginBottom: '13px' }}><b>Login</b> with Others</p>
                <button className='google-button'><img src='./google.png' />Login with  <b> Google</b></button>
                <button className='google-button'><img src='./facebook.png' />Login with  <b> Facebook</b></button>
            </div>
            {/* Display entered username and password after login button clicked */}
            {isLogged && (
                <div>
                    <h2>Entered Username: {username}</h2>
                    <h2>Entered Password: {password}</h2>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
