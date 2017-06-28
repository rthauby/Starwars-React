import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://swapi.co/api/'

function getListOfCharacters(options={}) {
    return axios.get(`/people`,{
        baseURL: API_URL
    })
        .then(res => {
            console.log(res);
        })
}

class Characters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            characters : []
        }
    }

    componentDidMount() {
        getListOfCharacters();
    }

    render() {
        return (
            <div>
                <h2>List of Characters</h2>
            </div>
        );
    }
}

export default Characters;