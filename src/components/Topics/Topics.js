import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {

    const topicLoader = useLoaderData();
    const topics = topicLoader.data;

    return (
        <div id='topics' className='container card-large'>
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