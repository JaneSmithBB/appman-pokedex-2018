import { getPokemons, handleSelect, handleRemove } from '../reducers/pokemon';
import { handleToggleView } from '../reducers/duelState';

import { connect } from 'react-redux';
import State from '../components/state';


const mapStateToProps = ({ pokemons, duelState }) => ({
  cards: pokemons.cards,
  selected: pokemons.selected,
  open: duelState.open,
});

const mapDispatchToProps = dispatch => ({
  getPokemons: () => dispatch(getPokemons()),
  handleToggleView: () => dispatch(handleToggleView()),
  handleSelect: data => dispatch(handleSelect(data)),
  handleRemove: id => dispatch(handleRemove(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(State);