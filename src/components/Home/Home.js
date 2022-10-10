import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';

const Home = () => {

    const quizTopics = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Topics quizTopics={quizTopics}></Topics>
        </div>
    );
};

export default Home;