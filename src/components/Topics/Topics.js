import React from 'react';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = ({ quizTopics }) => {

    const topics = quizTopics.data;

    return (
        <div className='topics container card-large'>
            {
                topics.map(topic => <Topic topic={topic} key={topic.id}></Topic>)
            }
        </div>
    );
};

export default Topics;