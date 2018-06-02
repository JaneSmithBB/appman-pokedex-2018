import axios from 'axios';

import {
  SET_CARDS,
  ADD_SELECTED_CARD,
  REMOVE_SELECTED_CARD
} from '../types';


function setCards(data) {
  return {
    type: SET_CARDS,
    data
  };
}

function setSelect(data) {
  return {
    type: ADD_SELECTED_CARD,
    data
  };
}

function removeSelect(id) {
  return {
    type: REMOVE_SELECTED_CARD,
    id
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

export const handleSelect = data => 
  dispatch => dispatch(setSelect(data));

export const handleRemove = id =>
  dispatch => dispatch(removeSelect(id));

const initialState = {
  cards: [],
  selected: [],
};

const pokemoms = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
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
            damage += parseInt(dataDamage, 10);
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

    case ADD_SELECTED_CARD:
      const filter = state.selected.filter(item => {
        return item.id === action.data.id;
      });
      let addDate = filter.length > 0 ? [...state.selected] : [...state.selected, action.data];
      
      return {
        ...state,
        selected: addDate
      }

    case REMOVE_SELECTED_CARD:
      const removeFilter = state.selected.filter(item => {
        return item.id !== action.id;
      });
      return {
        ...state,
        selected: removeFilter,
      }
    
    default:
      return state;
  }
};

export default pokemoms;