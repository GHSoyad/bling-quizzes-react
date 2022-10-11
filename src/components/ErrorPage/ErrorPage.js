import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='outer-container'>
            <div className='container card-large error-container'>
                <p className='error-title'>404</p>
                <p className='error-message'>OOPS! NOTHING WAS FOUND</p>
                <p className='error-description'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/" className='error-description'><button>Return to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;