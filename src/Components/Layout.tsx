import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Home = () => <div>Home content</div>;
const About = () => <div>About content</div>;
const Services = () => <div>Services content</div>;
const Contact = () => <div>Contact content</div>;

const Layout = () => {
    const [open, setOpen] = useState(true);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <Router>
            <div className="flex">
                <div className={`flex flex-col h-screen ${open ? "w-72" : "w-20"} bg-white h-screen p-5 pt-8 relative duration-300`}>
                    <button className="bg-teal-600 mt-4 ml-2" onClick={toggleSidebar}>FNB-MCPC</button>
                    <ul className={`mt-4 ${!open && "scale-0"}`}>
                        <li><Link to="/" className="text-black hover:text-black-300 hover:bg-black-400">Home</Link></li>
                        <li><Link to="/about" className="text-black hover:text-gray-300">About</Link></li>
                        <li><Link to="/services" className="text-black hover:text-gray-300">Services</Link></li>
                        <li><Link to="/contact" className="text-black hover:text-gray-300">Contact</Link></li>
                    </ul>

                </div>
                <div className="bg-gray-400 w-screen">
                    <div className="bg-purple-600 h-16 flex justify-end gap-2 mr-1">
                        <Link to="/" className="bg-teal-200 w-14 h-9 mt-3 hover:bg-red-400">Home</Link>
                        <Link to="/about" className="bg-teal-200 w-14 h-9 mt-3 hover:bg-red-400">About</Link>
                        <Link to="/services" className="bg-teal-200 w-16 h-9 mt-3 hover:bg-red-400">Services</Link>
                        <Link to="/contact" className="bg-teal-200 w-16 h-9 mt-3 hover:bg-red-400">Contact</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Layout;
