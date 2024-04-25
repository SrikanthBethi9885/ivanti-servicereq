import './Layout.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <Link to='/purchases'>
                <img src="logo.png" alt="Logo" className="logo" />
            </Link>
            <Link to='/purchases' className={`sidebar-button ${location.pathname.startsWith('/purchases') ? 'active' : ''}`} style={{ marginTop: '54px' }}>

                <img src="purchases.png" alt="Logo" height='24px' width='24px' />
                <span>Purchases</span>
            </Link>
            <Link to='/orders' className={`sidebar-button ${location.pathname.startsWith('/orders') ? 'active' : ''}`}>
                <img src="orders.png" alt="Logo" height='24px' width='24px' />
                <span>Orders</span>
            </Link>
            <Link to='/assets' className={`sidebar-button ${location.pathname.startsWith('/assets') ? 'active' : ''}`}>
                <img src="assets.png" alt="Logo" height='24px' width='24px' />
                <span>Assets</span>
            </Link>
        </div>
    );
};

export default Sidebar;