import { getPokemons, handleSelect } from '../reducers/pokemon';
import { handleToggleView } from '../reducers/duelState';

import { connect } from 'react-redux';
import Card from '../components/common/card';


const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  handleSelect: data => dispatch(handleSelect(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);