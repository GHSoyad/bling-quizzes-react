import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container nav-items'>
                <div className='nav-logo'>
                    <img src="logo.png" alt="" />
                    <h2>Bling Quizzes</h2>
                </div>
                <div className='nav-links'>
                    <NavLink to="/" className='nav-link'>Topics</NavLink>
                    <NavLink to="/statistics" className='nav-link'>Statistics</NavLink>
                    <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;