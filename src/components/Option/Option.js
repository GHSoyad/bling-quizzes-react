import React from 'react';
import './Option.css'

const Option = (props) => {
    const { option, number, isCorrect } = props;

    return (
        <div onClick={() => isCorrect(option)}>
            <button className='btn-option'><span className='number'>{number + 1}) </span> {option}</button>
        </div>
    );
};

export default Option;