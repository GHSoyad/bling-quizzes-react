import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizTopic.css'

const QuizTopic = () => {
    const quizData = useLoaderData();
    const quizzes = quizData.data;
    const { name, questions } = quizzes;

    return (
        <div className='container card-large quiz-topic'>
            <h2>{name} : {questions.length} Questions</h2>

            <div className='questions'>
                {
                    questions.map(question => <Question question={question} key={question.id}></Question>)
                }
            </div>
        </div>
    );
};

export default QuizTopic;