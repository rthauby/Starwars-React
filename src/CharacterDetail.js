import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import CharacterAttributes from './CharacterAttributes';
import ErrorHandler from './ErrorHandler';

const API_URL = 'http://swapi.co/api/'

function handleClick() {
    window.history.back();
}

function getCharacterDetails(options={}) {
    return axios.get(`/people/${options.id}`,{
        baseURL: API_URL
    })
        .then(res => {
            console.log(res);
            return _.pick(res.data, [
                'name',
                'gender',
                'birth_year',
                'eye_color',
                'hair_color',
                'height',
                'mass',
                'skin_color',
            ]);
        })
}

class CharacterDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            character : {}
        }
    }

    componentDidMount() {
        if(this.props.match){
            const characterId = this.props.match.params.id;
            getCharacterDetails({id : characterId})
                .then(character => {
                    this.setState({ character })
                })
                .catch(error => {
                    this.setState({apiError : error.toString()});
                })
        }
    }

    render() {
        return (
            <div className="starWarsComponent">
                <div className="verticalCenter">
                    <h2>Character Details</h2>
                    <ErrorHandler callback={this.refresh} error={this.state.apiError} />
                    <div className='stdList'>
                        <CharacterAttributes list={this.state.character} />
                    </div>
                    <div>
                        <a className='stdBtn'onClick={handleClick}><span>Back</span></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterDetail;