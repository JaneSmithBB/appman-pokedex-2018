import { combineReducers } from 'redux';
import pokemons from './pokemon';
import duelState from './duelState';

const rootReducer = combineReducers({
  pokemons,
  duelState
});

export default rootReducer;