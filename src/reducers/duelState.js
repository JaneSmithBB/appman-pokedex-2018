import {
  TOGGLE_VIEW
} from '../types';

function toggleView(open) {
  return {
    type: TOGGLE_VIEW,
  };
}

export function handleToggleView(){
  return (dispatch) => dispatch(toggleView())
}

const initialState = {
  open: false,
  selected: [],
};

const duelState = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      return {
        ...initialState,
        open: !state.open
      };
    
    default:
      return state;
  }
};

export default duelState;