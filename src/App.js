import React, { useState } from 'react';
import { data } from './data';
import Question from './Question';

const App = () => {
    return (
        <div className='container'>
            <div className="content">
                <aside className='leftSide'>
                    <h2>questions and answers about login</h2>
                </aside>
                <aside className='rightSide'>
                    {data.map((question) => {
                        return (
                            <div className="question" key={question.id}>
                                <Question question={question.question} answer={question.answer} />
                            </div>
                        );
                    })}
                </aside>
            </div>
        </div>
    )
}

export default App;