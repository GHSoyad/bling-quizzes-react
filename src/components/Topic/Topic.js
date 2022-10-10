import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {

    const { id, logo, name, total } = topic;

    return (
        <div className='topic card'>
            <div className='topic-img'>
                <img src={logo} alt="" />
            </div>
            <div className='topic-info'>
                <h2>{name}</h2>
                <h3>Total Quizzes: {total}</h3>
                <Link to={`/topic/${id}`}><button className='btn'>Take Quiz</button></Link>
            </div>
        </div>
    );
};

export default Topic;