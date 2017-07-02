import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import CharacterAttributes from './CharacterAttributes';

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
        const characterId = this.props.match.params.id;
        getCharacterDetails({id : characterId})
            .then(character => {
                this.setState({ character })
            });
    }

    render() {
        return (
            <div className="starWarsComponent">
                <div className="verticalCenter">
                    <h3>Character Details</h3>
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