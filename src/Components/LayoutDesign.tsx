import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import DataObjectIcon from '@mui/icons-material/DataObject';

const LayoutDesign = () => {
    const [open, setOpen] = useState(true);
    const location = useLocation();

    return (
        <div className={`flex flex-col h-screen ${open ? "w-62" : "w-20 "} bg-gray-100 h-screen p-5 pt-8 relative duration-300`}>
            <img
                src="control.png"
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <h1
                    className={`text-teal-700 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                        }`}
                >
                    FNB-MCPC
                </h1>
            </div>
            <ul className="pt-6">
                <Link to="/" className={`flex rounded-md p-2 cursor-pointer relative ${location.pathname === '/' ? 'bg-teal-700 text-white' : 'hover:bg-teal-700 text-gray-600'} text-sm items-center gap-x-4 mt-2`}>
                    <div className={`absolute left-0 h-full bg-gray-300 w-1 ${location.pathname === '/' ? 'block' : 'hidden'}`}></div>
                    <SettingsIcon />
                    <Link className={`${!open && "hidden"} origin-left duration-200 `} to="/">Service Requests</Link>
                </Link>

                <Link to='/inbox' className={`flex rounded-md p-2 cursor-pointer ${location.pathname === '/inbox' ? 'bg-teal-700 text-white' : 'hover:bg-teal-700 text-gray-600'} text-sm items-center gap-x-4 mt-2`}>
                    <div className={`absolute left-0 h-full bg-gray-300 w-1 ${location.pathname === '/inbox' ? 'block' : 'hidden'}`}></div>
                    <InventoryIcon />
                    <Link className={`${!open && "hidden"} origin-left duration-200`} to="/inbox">Assets</Link>
                </Link>

                <Link to='/mapping' className={`flex rounded-md p-2 cursor-pointer ${location.pathname === '/mapping' ? 'bg-teal-700 text-white' : 'hover:bg-teal-700 text-gray-600'} text-sm items-center gap-x-4 mt-2`}>
                    <div className={`absolute left-0 h-full bg-gray-300 w-1 ${location.pathname === '/mapping' ? 'block' : 'hidden'}`}></div>
                    <DataObjectIcon />
                    <Link className={`${!open && "hidden"} origin-left duration-200`} to="/mapping">ServiceRequest Mapping</Link>
                </Link>
                <Link to='/assets' className={`flex rounded-md p-2 cursor-pointer ${location.pathname === '/assets' ? 'bg-teal-700 text-white' : 'hover:bg-teal-700 text-gray-600'} text-sm items-center gap-x-4 mt-2`}>
                    <div className={`absolute left-0 h-full bg-gray-300 w-1 ${location.pathname === '/assets' ? 'block' : 'hidden'}`}></div>
                    <DataObjectIcon />
                    <Link className={`${!open && "hidden"} origin-left duration-200`} to="/assets">Assets Mapping</Link>
                </Link>
            </ul>
        </div>
    );
};

export default LayoutDesign;
