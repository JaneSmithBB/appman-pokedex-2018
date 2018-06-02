import { getPokemons } from '../reducers/pokemon';
import { handleToggleView } from '../reducers/duelState';

import { connect } from 'react-redux';
import State from '../components/state';


const mapStateToProps = ({ pokemons, duelState }) => ({
  cards: pokemons.cards,
  open: duelState.open,
});

const mapDispatchToProps = dispatch => ({
  getPokemons: () => dispatch(getPokemons()),
  handleToggleView: () => dispatch(handleToggleView()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(State);