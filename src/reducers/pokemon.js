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
      console.log('getPokemons =>', res);
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
      console.log('action', action.data);
      return {
        ...initialState,
        cards: action.data
      }
    break;
    
    default:
      return state;
  }
};

export default pokemoms;