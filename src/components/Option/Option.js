import React from 'react';
import './Option.css'

const Option = (props) => {
    const { option, number, isCorrect } = props;

    return (
        <div onClick={() => isCorrect(option)}>
            <button className='btn-option'>{number + 1}. {option}</button>
        </div>
    );
};

export default Option;