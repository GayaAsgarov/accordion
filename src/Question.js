import React, { useState } from 'react';

const Question = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    
    const displayAnswer=()=>{
        setShowAnswer(!showAnswer);
    }
    return (
        <div className='question-container'>
            <header>
                <h1>{props.question}</h1>
                <div className="plus-icon">
                    <i className={showAnswer ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} onClick={displayAnswer}></i>
                </div>
            </header>
            <p className={showAnswer ? 'display' : 'hide'}>{props.answer}</p>

        </div>
    )
}

export default Question