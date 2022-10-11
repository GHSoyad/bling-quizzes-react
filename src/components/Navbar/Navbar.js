import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const closeNav = (e) => {
        let element = e.target;
        if (element.classList.contains('nav-link')) {
            setToggle(false);
        }
    }

    return (
        <div className='navbar'>
            <div className='container nav-items'>
                <Link to='/' className='nav-logo'>
                    <img src="/logo.png" alt="" />
                    <h2>Bling Quizzes</h2>
                </Link>
                <div onClick={() => setToggle(!toggle)} className="nav-icon">
                    {
                        toggle ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>
                    }
                </div>
                <div id='nav-links' className={`nav-links ${toggle ? 'toggle-open' : 'toggle-close'}`} onClick={(e) => closeNav(e)}>
                    <NavLink to="/home" className='nav-link'>Home</NavLink>
                    <NavLink to="/topics" className='nav-link'>Topics</NavLink>
                    <NavLink to="/statistics" className='nav-link'>Statistics</NavLink>
                    <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;