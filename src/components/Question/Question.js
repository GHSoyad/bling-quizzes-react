import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = (props) => {

    const { question, options } = props.question;
    const createMarkUp = () => {
        return { __html: `${question}` }
    }

    return (
        <div className='card question'>
            <div className='question-detail' dangerouslySetInnerHTML={createMarkUp()}>
            </div>

            <div className='options'>
                {options.map((option, index) => <Option option={option} number={index} key={index}></Option>)}
            </div>
        </div>
    );
};

export default Question;