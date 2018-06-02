import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../layouts';
import Card from '../common/card';
import Search from './search';

import { screen } from '../../assets/styles/_variables';

const Wrapper = styled.div`
  position: relative;
  width: ${screen.width};
  height: ${screen.height};
`;

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
    const cards = this.props.cards;
    return (
      <Wrapper>
        <Layout toggleView={() => this.props.handleToggleView()}>
          {cards.map(card => {
            return <Card key={card.id} data={card} />
          })}
        </Layout>
        <Search
          open={this.props.open}
          data={cards}
          toggleView={() => this.props.handleToggleView()}
        />
      </Wrapper>
    )
  }
}

export default State;