import React from 'react';
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
                    <a href="/" className='nav-link'>Topics</a>
                    <a href="/" className='nav-link'>Statistics</a>
                    <a href="/" className='nav-link'>Blog</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;