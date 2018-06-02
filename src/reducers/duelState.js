import {
  ADD_SELECTED_CARD,
  TOGGLE_VIEW
} from '../types';

function toggleView(open) {
  console.log(open)
  return {
    type: TOGGLE_VIEW,
  };
}

function setSelected(data) {
  return {
    type: ADD_SELECTED_CARD,
    data
  };
}

// export function handleToggleView(){
//   return dispatch => dispatch(toggleView({open: false}));
// };

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
      console.log('state', state); 
      return {
        ...initialState,
        open: !state.open
      };
    break;
    
    case 'ADD_SELECTED_CARD': 

    break;
    
    default:
      return state;
  }
};

export default duelState;