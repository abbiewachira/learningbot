import React from 'react';

import'./options.css';

const Options =(props) => {
    const options = [
        {
            text:"General Knowledge",
            handler: props.actionProvider.handleJavascriptQuiz,
            id:1,
        },
        {text:"COVID-19", handler:props.actionProvider.handleCovidQuiz , id: 2},
        {text:"Volume", handler:() =>{}, id: 3},
    ];
    
    const buttonMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonMarkup}</div>;


};

export default Options; 