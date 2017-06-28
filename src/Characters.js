import React, { Component } from 'react';
import axios from 'axios';

import CharacterList from './CharacterList';

const API_URL = 'http://swapi.co/api/'

function getListOfCharacters(options={}) {
    return axios.get(`/people`,{
        baseURL: API_URL
    })
        .then(res => {
            return res.data.results;
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
        getListOfCharacters()
            .then(characters => {
                this.setState({ characters })
            });
    }

    render() {
        return (
            <div>
                <h2>List of Characters</h2>
                <CharacterList list={this.state.characters}/>
            </div>
        );
    }
}

export default Characters;