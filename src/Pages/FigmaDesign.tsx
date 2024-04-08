import React from 'react';
import './Layout.css';

const FigmaDesign = () => {
    return (
        <div className="custom-layout">
            <div className="sidebar">
                <img src="logo.png" alt="Logo" className="logo" />
                <button className="purchase-button">Purchases</button>
                <button className='inventory-button'>Inventory</button>
                <button className='inventory-button'>Tickets</button>
                <button className='inventory-button'>Orders</button>
                <button className='inventory-button'>Deployment</button>
                {/* Sidebar content goes here */}
            </div>
            <div className="header">

                {/* Header content goes here */}
                <input type="text" className="search-field" placeholder="Search here..." />
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

export default FigmaDesign;
