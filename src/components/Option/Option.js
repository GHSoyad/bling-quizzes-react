import React from 'react';
import './Option.css'

const Option = (props) => {
    const { option, number } = props;

    return (
        <div>
            <button className='btn-option'>{number + 1}. {option}</button>
        </div>
    );
};

export default Option;