// Header.js
import React from 'react';
import './Layout.css';

const Header = () => {
    return (
        <div className="custom-layout">
            <div className="header">
                <input type="text" className="search-field" placeholder="Search Everything here..." />
                <div className="header-icons">
                    <img src="Notification.png" alt="Notification Icon" className="notification-icon" />
                    <img src="john.png" alt="John Image Icon" className="john-image-icon" />
                    <div className="user-info">
                        <span className="user-name">John Doe</span>
                        <span className="user-role">Admin</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
