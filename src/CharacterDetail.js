import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const API_URL = 'http://swapi.co/api/'

function getCharacterDetails(options={}) {
    return axios.get(`/people/${options.id}`,{
        baseURL: API_URL
    })
        .then(res => {
            console.log(res);
            return res.data.results;
        })
}

class CharacterDetail extends Component {

    componentDidMount() {
        this.state = {
            character : ''
        }

        const characterId = this.props.match.params.id;
        getCharacterDetails({id : characterId})
            .then(character => {
                this.setState({ character })
            });
    }

    render() {
        return (
            <div>
                <h3>Character Details</h3>
            </div>
        )
    }
}

export default CharacterDetail;