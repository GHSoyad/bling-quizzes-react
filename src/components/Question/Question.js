import React from 'react';
import Option from '../Option/Option';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = (props) => {
    const { number } = props;
    const { id, question, options, correctAnswer } = props.question;

    const createMarkUp = () => {
        return { __html: `${question}` }
    }

    const displayAnswer = (correctAnswer) => {
        console.log(correctAnswer)
        toast.info(`${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000
        });
    }

    const isCorrect = (selectedOption, selectedBtnId, selectedQuestion) => {
        if (selectedOption === correctAnswer) {
            toast.success('Well Done! Your Answer is Correct', {
                autoClose: 3000
            });
        } else {
            toast.error('Your answer is Incorrect, Try Again!');
        }

        const deactivatedBtns = document.getElementsByClassName(selectedQuestion);
        for (let btns of deactivatedBtns) {
            btns.classList.remove('active');
        }
        console.log(deactivatedBtns)

        const activeBtn = document.getElementById(selectedBtnId);
        activeBtn.classList.add('active');
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
                {options.map((option, index) => <Option key={index} option={option} number={index} id={id} isCorrect={isCorrect}></Option>)}
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

export default Question;