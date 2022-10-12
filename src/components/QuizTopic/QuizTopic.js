import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizTopic.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizTopic = () => {
    const quizData = useLoaderData();
    const quizzes = quizData.data;
    const { name, questions } = quizzes;

    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);

    // Function to select answer
    const isCorrect = (selectedOption, selectedBtnId, selectedQuestion, getCorrectAnswer) => {

        // Deactivate all other selected answer
        const deactivatedBtns = document.getElementsByClassName(selectedQuestion);
        for (let btns of deactivatedBtns) {
            btns.classList.remove('correct');
            btns.classList.remove('incorrect');
            btns.setAttribute('disabled', true);
        }

        const activeBtn = document.getElementById(selectedBtnId);

        // Display selected answer toast, set class name, set answer count
        if (selectedOption === getCorrectAnswer) {
            toast.success('Well Done! Your Answer is Correct', {
                autoClose: 3000
            });
            activeBtn.classList.add('correct');
            setCorrectAnswer(correctAnswer + 1);
        } else {
            toast.error('Your answer is Incorrect, Try Again!');
            activeBtn.classList.add('incorrect');
            setWrongAnswer(wrongAnswer + 1);
        }
    }

    return (
        <div className='container card-large quiz-topic'>
            <h2>{name} : {questions.length} Questions</h2>
            <div className='result-container'>
                <div className='card result'>
                    <p>Correct Answer: {correctAnswer}</p>
                    <p>Wrong Answer: {wrongAnswer}</p>
                </div>
            </div>

            <div className='questions'>
                {
                    questions.map((question, index) => <Question question={question} number={index} isCorrect={isCorrect} getCo key={question.id}></Question>)
                }
            </div>

            <ToastContainer
                position="top-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default QuizTopic;