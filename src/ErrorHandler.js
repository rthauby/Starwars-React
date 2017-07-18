import React from 'react';

import './ErrorHandler.css';

let callback,
    error,
    activeClassName;

function handleClick() {
    if(callback){
        callback();
    }
}

function ErrorHandler(props) {

    if (props.callback){
        callback = props.callback;
    }

    if(props.error){
        error = props.error;
        activeClassName = 'active';
    }

    return (
        <div className={`stdErrorHandler ${activeClassName}`}>
            <div>There was an error with that request. <a href='' onClick={handleClick}>Try again?</a></div>
            <div>({error})</div>
        </div>
    )

}

export default ErrorHandler;