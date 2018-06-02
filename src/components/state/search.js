import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import Card from '../common/card';
import icon from '../../assets/images/search.png';

import { colors, gutter, font } from '../../assets/styles/_variables';

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: rgba(0,0,0,0.3);
  display: none;
  ${props => props.open && css`
    display: flex;
    flex-direction: column;
    z-index: 1024;
  `}
`;

const Wrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: ${colors.modalContentBackground};
`;

const Header = styled.div`
  padding: ${gutter.default};
  *, ::after, ::before {
    box-sizing: border-box;
  }
`;

const Body = styled.div`
  padding: ${gutter.default};
`;

const SearchIcon = styled.img`
  display: inline-block;
  width: 50px;
  height: auto;
  position: absolute;
  top: 5px;
  bottom: 0;
  right: 0;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  font-family: ${font.family.default};
  font-size: ${font.size.default};
  padding: ${gutter.sm};
  padding-right: 80px;
  border: none;
  box-shadow: 0 1px 1px ${colors.cardBoxShadow};
  &:focus{
    outline: none;
  }
`;

const SearchGroup = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  color: ${colors.bottomBarTextColor};
  background-color: ${colors.bottomBarBackground};
  border: 0px;
  font-family: ${font.family.title};
  font-size: 40px;
  line-height: 1;
  display: inline-block;
  cursor: pointer;
  padding: ${gutter.xs};
`;

const SearchPanel = props => {
  return (
    <SearchGroup>
      <SearchInput {...props} placeholder="Find pokemon" />
      <SearchIcon src={icon} />
    </SearchGroup>
  );
}

class Search extends Component {
  state = {  }
  render() {
    const { data } = this.props;
    const cards = data;
    return (
      <Main open={this.props.open}>
        <CloseButton type="button" onClick={() => this.props.toggleView()}>X</CloseButton>
        <Wrapper>
          <Header>
            <SearchPanel />
          </Header>
          <Body>
            {cards && cards.map(card => {
              return (
                <Card
                  key={card.id}
                  data={card}
                  buttonType={this.props.buttonType}
                  handleSelect={data => this.props.handleSelect(data)} />
              );
            })}
          </Body>
        </Wrapper>
      </Main>
    )
  }
}

export default Search;