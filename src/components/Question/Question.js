import React from 'react';
import Option from '../Option/Option';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = (props) => {

    const { question, options, correctAnswer } = props.question;
    const createMarkUp = () => {
        return { __html: `${question}` }
    }

    const isCorrect = (selectedOption) => {
        if (selectedOption === correctAnswer) {
            toast.success('Well Done! Your Answer is Correct', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('Your answer is Incorrect, Try Again!', {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className='card question'>
            <div className='question-detail' dangerouslySetInnerHTML={createMarkUp()}>
            </div>

            <div className='options'>
                {options.map((option, index) => <Option key={index} option={option} number={index} isCorrect={isCorrect}></Option>)}
            </div>

            <ToastContainer
                position="top-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
            />
        </div>
    );
};

export default Question;