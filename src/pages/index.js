import { getPokemons } from '../reducers/pokemon';

import { connect } from 'react-redux';
import State from '../components/state';


const mapStateToProps = ({ pokemons }) => ({
  cards: pokemons.cards
});

const mapDispatchToProps = dispatch => ({
  getPokemons: () => dispatch(getPokemons()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(State);