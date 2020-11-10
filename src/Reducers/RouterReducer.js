import {SET_ROUTE, PREPARE_ROUTE_CHANGE} from '../Actions/RouterActions';

const initState = {
  route: "comp1",
  prepareRouteChange: false
}

export default (state = initState, action) => {
  switch(action.type){
    case SET_ROUTE:
      return {
        ...state,
        route: action.payload,
        prepareRouteChange: false
      }
    case PREPARE_ROUTE_CHANGE:
      return {
        ...state,
        prepareRouteChange: true
      }
    default:
      return state;
  }
}