import React from 'react';
import Option from '../Option/Option';
import './Question.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = (props) => {
    const { number, isCorrect } = props;
    const { id, question, options, correctAnswer } = props.question;

    const createMarkUp = () => {
        return { __html: `${question}` }
    }

    const displayAnswer = (correctAnswer) => {
        console.log(correctAnswer)
        toast.info(`Quiz ${number + 1}: \u00A0${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000
        });
    }

    return (
        <div className='card question'>
            <FontAwesomeIcon onClick={() => displayAnswer(correctAnswer)} icon={faEye} className="icon tags" title="See Answer"></FontAwesomeIcon>
            <div className='question-detail'>
                <p className='number'>Quiz {number + 1}. </p>
                <p dangerouslySetInnerHTML={createMarkUp()}>
                </p>
            </div>

            <div className='options'>
                {options.map((option, index) => <Option key={index} option={option} number={index} id={id} isCorrect={isCorrect} correctAnswer={correctAnswer}></Option>)}
            </div>

        </div>
    );
};

export default Question;