import React, { Component } from 'react';
import styled from 'styled-components';
import { font, colors, gutter } from '../../assets/styles/_variables';

const Wrapper = styled.div`
  background: #fff;
  width: 1024px;
  height: 768px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LayoutHeader = styled.div`
  font-family: ${font.family.title};
  font-size: ${font.size.mainTitle};
  text-align: center;
`;

const LayoutBody = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: ${gutter.default};
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const LayoutFooter = styled.footer`
  background-color: ${colors.bottomBarBackground};
  color: ${colors.bottomBarTextColor};
  position: relative;
  height: 65px;
  text-align: center;
`;

const LayoutAddButton = styled.button`
  color: ${colors.bottomBarTextColor};
  background-color: ${colors.bottomBarBackground};
  border: 0px;
  font-family: ${font.family.title};
  font-size: 72px;
  box-shadow: inset 0 3px 5px ${colors.bottomBarBoxShadow};
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -40px;
  &:focus{
    outline: none;
  }
`;

// const AddButton = props => <LayoutAddButton type="button" onClick={props.onClick}>+</LayoutAddButton>;

class Layout extends Component {
  state = {  }

  handle(){
    console.log('hand');
    this.props.toggleView();
  }

  render() {
    return (
      <Wrapper>
        <LayoutHeader>My Pokedex</LayoutHeader>
        <LayoutBody>
          <Main>
            {this.props.children}
          </Main>
        </LayoutBody>
        <LayoutFooter>
          <LayoutAddButton type="button" onClick={() => this.props.toggleView()}>+</LayoutAddButton>
        </LayoutFooter>
      </Wrapper>
    )
  }
}

export default Layout;