import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = (props) => {

    const { question, options, correctAnswer } = props.question;
    const createMarkUp = () => {
        return { __html: `${question}` }
    }

    const isCorrect = (selectedOption) => {
        if (selectedOption === correctAnswer) {
            console.log(selectedOption)
        }
    }

    return (
        <div className='card question'>
            <div className='question-detail' dangerouslySetInnerHTML={createMarkUp()}>
            </div>

            <div className='options'>
                {options.map((option, index) => <Option key={index} option={option} number={index} isCorrect={isCorrect}></Option>)}
            </div>
        </div>
    );
};

export default Question;