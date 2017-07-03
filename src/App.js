import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Characters from './Characters';
import CharacterDetail from './CharacterDetail'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Switch>
          <Route exact path="/" component={Characters}/>
          <Route exact path="/:page" component={Characters}/>
          <Route exact path="/characters/:page" component={Characters}/>
          <Route path="/character/:id" component={CharacterDetail}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
