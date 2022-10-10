import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {

    const { logo, name, total } = topic;

    return (
        <div className='topic card'>
            <div className='topic-img'>
                <img src={logo} alt="" />
            </div>
            <div className='topic-info'>
                <h2>{name}</h2>
                <h3>Total Quizzes: {total}</h3>
                <button className='btn'>Take Quiz</button>
            </div>
        </div>
    );
};

export default Topic;