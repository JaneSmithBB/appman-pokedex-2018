import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './assets/styles/css/App.css';

import Index from './containers/index';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Index} />
      </div>
    );
  }
}

export default App;
