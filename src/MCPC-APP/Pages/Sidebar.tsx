import React, { useState } from 'react';
import './Layout.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();


    return (
        <div className="sidebar">
            <Link to='/purchases'>
                <img src="logo.png" alt="Logo" className="logo" />
            </Link>
            <Link to='/purchases' className={location.pathname === '/purchases' ? 'active' : ''}>
                <button className="sidebar-button" style={{ marginTop: '54px', marginBottom: '5px' }}>
                    <img src="purchases.png" alt="Logo" height='24px' width='24px' style={{ marginRight: '20px' }} />
                    <span>Purchases</span>
                </button>
            </Link>
            {/* <Link to='/inventory' >
                <button className='sidebar-button' style={{ marginBottom: '5px' }}>
                    <img src="inventory.png" alt="Logo" height='24px' width='24px' style={{ marginRight: '20px' }} />
                    <span>Inventory</span>
                </button>
            </Link>
            <Link to='/tickets' >
                <button className='sidebar-button' style={{ marginBottom: '5px' }}>
                    <img src="tickets.png" alt="Logo" height='24px' width='24px' style={{ marginRight: '20px' }} />
                    <span>Tickets</span>
                </button>
            </Link> */}
            <Link to='/orders' >
                <button className='sidebar-button' style={{ marginBottom: '5px' }}>
                    <img src="orders.png" alt="Logo" height='24px' width='24px' style={{ marginRight: '20px' }} />
                    <span>Orders</span>
                </button>
            </Link>
            <Link to='/assets' >
                <button className='sidebar-button' style={{ marginBottom: '5px' }}>
                    <img src="assets.png" alt="Logo" height='24px' width='24px' style={{ marginRight: '20px' }} />
                    <span>Assets</span>
                </button>
            </Link>
        </div>
    );
};

export default Sidebar;
