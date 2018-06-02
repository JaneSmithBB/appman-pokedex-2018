import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './assets/styles/css/App.css';

import Index from './pages/index';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Index} />
      </main>
    );
  }
}

export default App;
