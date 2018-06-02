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
    const cards = this.props.cards;
    const selected = this.props.selected;
    return (
      <Wrapper>
        <Layout toggleView={() => this.props.handleToggleView()}>
          { selected && selected.map(item => {
            return (
              <Card
                key={item.id}
                className="half"
                data={item}
                buttonType='remove'
                handleRemove={id => this.props.handleRemove(id)}
              />
            );
          })}
        </Layout>
        <Search
          open={this.props.open}
          data={cards}
          buttonType='add'
          toggleView={() => this.props.handleToggleView()}
          handleSelect={data => this.props.handleSelect(data)}
        />
      </Wrapper>
    )
  }
}

export default State;