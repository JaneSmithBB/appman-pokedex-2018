import React, { Component } from 'react';

class State extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.props.getPokemons();
  }

  render() {
    console.log('State', this.props)
    return (
      <h1>State</h1>
    )
  }
}

export default State;