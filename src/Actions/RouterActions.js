export const SET_ROUTE = "SET_ROUTE";

export const setRoute = (actions) => {

  return {
      type: SET_ROUTE,
      payload: actions
  }
}

export const PREPARE_ROUTE_CHANGE = "PREPARE_ROUTE_CHANGE";

export const prepareRouteChange = () => {

  return {
      type: PREPARE_ROUTE_CHANGE
  }
}
