import {TOGGLE_SOMETHING} from '../Actions/MainActions';

const initState = {
  somethinig: false
}

export default (state = initState, action) => {
  switch(action.type){
    case TOGGLE_SOMETHING:
      return {
        ...state,
        somethinig: action.payload
      }
    default:
      return state;
  }
}