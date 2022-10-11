import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faComment } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container card-large'>
            <h2>Blogs</h2>
            <div className='blogs'>
                <div className='blog card'>
                    <div className='blog-details'>
                        <h3>What is the purpose of React Router?</h3>
                        <p className='blog-author'><FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon> Golam Hasnain Soyad</p>
                        <p className='blog-description'>React Router is a standard library for routing in React. It enables navigation and viewing of various components in a React Application and allows changing the browser URL without refreshing the entire page. It is a state container for the current browser location. It keeps track of the location and renders different routes as it changes.</p>
                    </div>
                    <div className='blog-infos'>
                        <div className='blog-info'>
                            <FontAwesomeIcon icon={faEye} className="icon"></FontAwesomeIcon>
                            <span>38</span>
                        </div>
                        <div className='blog-info'>
                            <FontAwesomeIcon icon={faComment} className="icon"></FontAwesomeIcon>
                            <span>21</span>
                        </div>
                    </div>
                </div>
                <div className='blog card'>
                    <div className='blog-details'>
                        <h3>How does Context API work?</h3>
                        <p className='blog-author'><FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon> Golam Hasnain Soyad</p>
                        <p className='blog-description'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. Context provides a way to pass data through the component tree without having to pass props down manually at every level. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                    </div>
                    <div className='blog-infos'>
                        <div className='blog-info'>
                            <FontAwesomeIcon icon={faEye} className="icon"></FontAwesomeIcon>
                            <span>25</span>
                        </div>
                        <div className='blog-info'>
                            <FontAwesomeIcon icon={faComment} className="icon"></FontAwesomeIcon>
                            <span>16</span>
                        </div>
                    </div>
                </div>
                <div className='blog card'>
                    <div className='blog-details'>
                        <h3>What is useRef in React?</h3>
                        <p className='blog-author'><FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon> Golam Hasnain Soyad</p>
                        <p className='blog-description'>The useRef is a built-in React hook that allows to keep the same value between component renders. It is like a 'box' that can hold a mutable value that does not cause re-render when updated.</p>
                    </div>
                    <div className='blog-infos'>
                        <div className='blog-info'>
                            <FontAwesomeIcon icon={faEye} className="icon"></FontAwesomeIcon>
                            <span>19</span>
                        </div>
                        <div className='blog-info'>
                            <FontAwesomeIcon icon={faComment} className="icon"></FontAwesomeIcon>
                            <span>7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;