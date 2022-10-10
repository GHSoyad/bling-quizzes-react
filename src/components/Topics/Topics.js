import React from 'react';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = ({ quizTopics }) => {

    const topics = quizTopics.data;

    return (
        <div className='container card-large'>
            <h2>Quiz Topics</h2>
            <div className='topics'>
                {
                    topics.map(topic => <Topic topic={topic} key={topic.id}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;