import React from 'react';
import './Option.css'

const Option = (props) => {
    const { option, number, isCorrect, id, correctAnswer } = props;

    const btnId = (id + number);
    const questionIdentifier = id;

    return (
        <div onClick={() => isCorrect(option, btnId, questionIdentifier, correctAnswer)}>
            <button id={btnId} className={`btn-option ${questionIdentifier}`}><span className='number'>{number + 1}) </span> {option}</button>
        </div>
    );
};

export default Option;