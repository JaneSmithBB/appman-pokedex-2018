import React, { Component } from 'react';
import styled, {css} from 'styled-components';

import { colors, font, gutter } from '../../assets/styles/_variables';
import icon from '../../assets/images/cute.png'

const CardTemplate = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.cardBackground};
  padding: 20px;
  box-shadow: 0 1px 1px ${colors.cardBoxShadow};
  transition: all 0.2s ease;
  margin-bottom: ${gutter.default};
  position: relative;
  &:hover{
    box-shadow: 0 3px 3px ${colors.cardBoxShadowHover};
  }
  &.half{
    max-width: calc(50% - 51px);
    flex: 1;
    max-height: 310px;
    margin: ${gutter.xs};
  }
`;

const CardImageWrapper = styled.div`
  flex: 3;
  display: inline-block;
  min-width: 160px;
  max-width: 213px;
  margin-right: ${gutter.default};
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
`;

const CardContentTitle = styled.h2`
  font-family: ${font.family.default};
  font-size: ${font.size.cardTitle};
  line-height: 1;
  font-weight: 400;
  margin: ${gutter.sm} 0;
  &.half{
    font-size: calc(${font.size.cardTitle} * 0.85);
  }
`;

const Detail = styled.div`
  flex: 1;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${gutter.sm};
`;

const ListTitle = styled.div`
  flex: 3;
  max-width: 125px;
  font-family: ${font.family.title};
  font-size: ${font.size.cardListTitle};
  line-height: 1;
  margin-right: ${gutter.default};
  display: flex;
  align-items: center;
  align-content: center;
  &.half{
    font-size: calc(${font.size.cardListTitle} * 0.65);
  }
`;

const ListBody = styled.div`
  flex: 9;
  max-width: 450px;
`;

const ProgressLayout = styled.div`
  display: block;
  height: 28px;
  border-radius: 10px;
  background-color: ${colors.levelTubeBackground};
  position: relative;
  overflow: hidden;
  &:after{
    content: '';
    display: inline-block;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${colors.levelTubeValueBackground};
    ${props => props.width && css`
      width: ${props.width}%;
    `}
  }
`;

const HappyIcon = styled.img`
  display: inline-block;
  width: 50px;
  height: auto;
  margin-right: ${gutter.xs};
  &.half{
    width: 40px;
  }
`;

const CardAddButton = styled.button`
  color: ${colors.colorAddButton};
  border: 0px;
  display: inline-block;
  padding: ${gutter.sm};
  font-family: ${font.family.title};
  font-size: ${font.size.cardListTitle};
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  &:focus{
    outline: none;
  }
`;

const LevelTube = props => (
  <List>
    <ListTitle className={props.className}>{props.title}</ListTitle>
    <ListBody>
      <ProgressLayout width={props.progressWidth} />
    </ListBody>
  </List>
);



class Card extends Component {
  state = {  }

  render() {
    const { data } = this.props;
    const items = data.level;
    
    const Happiness = props => {
      let icons = [];
      for(let i = 0; i < items; i++){
        icons.push(<HappyIcon key={i} src={icon} className={props.className}/>);
      }
      return icons;
    }

    let renderButton = '';
      if(this.props.buttonType === 'remove'){
        renderButton = <CardAddButton type="button" onClick={() => this.props.handleRemove(data.id)}>X</CardAddButton>;
      } else {
        renderButton = <CardAddButton type="button" onClick={() => this.props.handleSelect(data)}>Add</CardAddButton>;
      }
    return (
      <CardTemplate className={this.props.className}>
        <CardImageWrapper>
          <CardImage src={data.image} />
        </CardImageWrapper>
        <CardContent>
          <CardContentTitle className={this.props.className}>{data.name}</CardContentTitle>
          <Detail>
            <LevelTube className={this.props.className} title="HP" progressWidth={data.hp}  />
            <LevelTube className={this.props.className} title="STR" progressWidth={data.attack}  />
            <LevelTube className={this.props.className} title="WEAK" progressWidth={data.weak}  />
            <Happiness className={this.props.className} />
          </Detail>
          {renderButton}
        </CardContent>
      </CardTemplate>
    )
  }
}

Card.defaultProps = {
  buttonType: 'add',
};

export default Card;