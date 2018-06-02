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
  &:hover{
    box-shadow: 0 3px 3px ${colors.cardBoxShadowHover};
  }
`;

const CardImageWrapper = styled.div`
  display: inline-block;
  width: 213px;
  margin-right: ${gutter.default};
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardContentTitle = styled.h2`
  font-family: ${font.family.default};
  font-size: ${font.size.cardTitle};
  line-height: 1;
  font-weight: 400;
  margin: ${gutter.sm} 0;
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
`;

const CardAddButton = styled.button`
  color: ${colors.colorAddButton};
  border: 0px;
  display: inline-block;
  padding: ${gutter.sm};
`;

const LevelTube = props => (
  <List>
    <ListTitle>{props.title}</ListTitle>
    <ListBody>
      <ProgressLayout width={props.progressWidth} />
    </ListBody>
  </List>
);



class Card extends Component {
  state = {  }

  handleSelect(data){
    console.log('data', data);
  }
  render() {
    const { data } = this.props;
    const items = data.level;
    
    const Happiness = () => {
      let icons = [];
      for(let i = 0; i < items; i++){
        icons.push(<HappyIcon key={i} src={icon} />);
      }
      return icons;
    }
    return (
      <CardTemplate>
        <CardImageWrapper>
          <CardImage src={data.image} />
        </CardImageWrapper>
        <CardContent>
          <CardContentTitle>{data.name}</CardContentTitle>
          <Detail>
            <LevelTube title="HP" progressWidth={data.hp}  />
            <LevelTube title="STR" progressWidth={data.attack}  />
            <LevelTube title="WEAK" progressWidth={data.weak}  />
            <Happiness />
          </Detail>
          <CardAddButton onClick={() => this.handleSelect(data)}>Add</CardAddButton>
        </CardContent>
      </CardTemplate>
    )
  }
}

export default Card;