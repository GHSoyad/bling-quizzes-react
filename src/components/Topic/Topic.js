import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <div>
                    <h2>{name}</h2>
                    <h3>Total Quizzes: {total}</h3>
                </div>
                <Link to={`/topic/${id}`}>
                    <button className='topic-btn'><span>Take Quiz</span> <FontAwesomeIcon icon={faArrowRight} className='topic-icon'></FontAwesomeIcon></button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;