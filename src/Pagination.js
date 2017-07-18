import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

const PAGINATION_BASE = 'http://swapi.co/api/people/?page=';

let callback;

function handleClick() {
    if(callback){
        callback();
    }
}

function Pagination(props) {

    let prevBtnDest = '',
        nextBtnDest = '';

    let nextBtnClass = '', prevBtnClass = '';

    if(props.nextPage){
        nextBtnDest = props.nextPage.replace(PAGINATION_BASE,'');
    } else {
        nextBtnClass = 'disabled';
    }

    if(props.previousPage){
        prevBtnDest = props.previousPage.replace(PAGINATION_BASE,'');
    } else {
        prevBtnClass = 'disabled';
    }

    if(props.callback){
        callback = props.callback;
    }

    return (
        <Router>
            <div>
                <Link className={`stdBtn ${prevBtnClass}`} to={`/${prevBtnDest}`} onClick={handleClick}><span>Previous</span></Link>
                <Link className={`stdBtn ${nextBtnClass}`} to={`/${nextBtnDest}`} onClick={handleClick}><span>Next</span></Link>
            </div>
        </Router>
    )
}

export default Pagination;