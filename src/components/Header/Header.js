import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='container header'>
            <div className='header-image'>
                <img src="./images/header-image.png" alt="" />
            </div>
            <div className='header-text'>
                <h1>Test your knowledge in Bling Quizzes</h1>
                <p>Choose a category in which you want to test your knowledge from React JS, JavaScript, CSS and Git.</p>
                <p>Answer multiple-choice quiz questions as accurately as possible. You will know the correct answer after choosing your answer.</p>
                <p>Want to see an answer before choosing? You can see the answer before you decide to choose one.</p>
            </div>
        </div>
    );
};

export default Header;