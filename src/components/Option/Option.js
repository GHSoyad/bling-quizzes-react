import React from 'react';
import './Option.css'

const Option = (props) => {
    const { option, number, isCorrect, id, correctAnswer } = props;

    const btnId = (id + number);
    const questionIdentifier = id;

    return (
        <div onClick={() => isCorrect(option, btnId, questionIdentifier, correctAnswer)}>
            <button id={btnId} className={`btn-option ${questionIdentifier}`}>{number + 1}) {` \u00A0\u00A0 `} {option}</button>
        </div>
    );
};

export default Option;