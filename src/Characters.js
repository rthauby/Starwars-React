import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import CharacterList from './CharacterList';
import Pagination from './Pagination';
import ErrorHandler from './ErrorHandler';

const API_URL = 'http://swapi.co/api/'
let pageNum;

function getListOfCharacters(options={}) {
    return axios.get(`/people/?page=${pageNum}`,{
        baseURL: API_URL
    })
        .then(res => {
            return _.pick(res.data, ['results', 'previous', 'next']);
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
        if(this.props.match && this.props.match.params.page){
            pageNum = this.props.match.params.page;
        } else {
            pageNum = 1;
        }

        getListOfCharacters()
            .then(data => {
                if(data && data.results) {
                    this.setState({ characters: data.results });
                }
                if(data && data.previous) {
                    this.setState({ previousPage: data.previous });
                }
                if(data && data.next) {
                    this.setState({ nextPage: data.next });
                }
            })
            .catch(error => {
                this.setState({apiError : error.toString()});
            })
    }

    render() {
        return (
            <div className="starWarsComponent">
                <ErrorHandler callback={this.refresh} error={this.state.apiError} />
                <div className="verticalCenter">
                    <h2>List of Characters</h2>
                    <div className='stdList'>
                        <CharacterList list={this.state.characters}/>
                    </div>
                    <Pagination previousPage={this.state.previousPage} nextPage={this.state.nextPage} callback={this.refresh}/>
                </div>
            </div>
        );
    }
}

export default Characters;