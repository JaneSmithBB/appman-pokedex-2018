import axios from 'axios';

import {
  SET_CARDS
} from '../types';


function setCards(data) {
  return {
    type: SET_CARDS,
    data
  };
}

export const getPokemons = () =>
  async (dispatch, getState) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3030/api/cards',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      dispatch(setCards(res.data.cards))
    })
    .catch(err => {
      console.log(err);
    });
};


const initialState = {
  cards: [],
};

const pokemoms = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      const dataset = action.data;
      const data = dataset.map(item => {
        const id = item.id;
        const name = item.name;
        const image = item.imageUrl;
        const hp = item.hp > 100 ? 100 : item.hp;
        const dataAttacks = item.attacks ? item.attacks : 0;

        const calAttacks = item.attacks ? item.attacks.length * 50 : 0;
        const attack = calAttacks > 100 ? 100 : calAttacks;

        const dataWeak = item.weaknesses ? item.weaknesses.length * 100 : 0;
        const weak = dataWeak > 100 ? 100 : dataWeak;

        let damage = 0;
        if(dataAttacks !== 0) {
          dataAttacks.forEach(item => {
            let dataDamage = item.damage ? item.damage : '0';
            dataDamage = dataDamage.match(/\d/g);
            dataDamage = dataDamage.join("");
            damage += parseInt(dataDamage);
          });
        }

        const calLevel = ((hp / 10) + (damage /10 ) + 10 - (weak/ 5));
        const level = calLevel > 0 ? calLevel : 0;

        return { id, name, image, hp, attack, weak, damage, level};
      });

      return {
        ...initialState,
        cards: data
      }
    break;
    
    default:
      return state;
  }
};

export default pokemoms;