import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import './App.css';

import CharacterList from './CharacterList';
import Pagination from './Pagination';

const API_URL = 'http://swapi.co/api/'
let pageNum;

function getListOfCharacters(options={}) {
    return axios.get(`/people/?page=${pageNum}`,{
        baseURL: API_URL
    })
        .then(res => {
            return _.pick(res.data, ['results', 'previous', 'next']);
            // return res.data.results
        })
        .catch(error => {
            // TODO
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
        this.refresh();
    }

    refresh() {
        if(this.props.match.params.page){
            pageNum = this.props.match.params.page;
        } else {
            pageNum = 1;
        }

        getListOfCharacters()
            .then(data => {
                if(data.results) {
                    this.setState({ characters: data.results });
                }
                if(data.previous) {
                    this.setState({ previousPage: data.previous });
                }
                if(data.next) {
                    this.setState({ nextPage: data.next });
                }
            })
    }

    render() {
        return (
            <div className="starWarsComponent">
                <div className="verticalCenter">
                    <h2>List of Characters</h2>
                    <CharacterList list={this.state.characters}/>
                    <Pagination previousPage={this.state.previousPage} nextPage={this.state.nextPage} callback={this.refresh}/>
                </div>
            </div>
        );
    }
}

export default Characters;