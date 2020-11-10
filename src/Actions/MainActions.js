export const TOGGLE_SOMETHING = "TOGGLE_SOMETHING";

export const toggleSomething = (actions) => {
  return {
    type: TOGGLE_SOMETHING,
    payload: actions
  }
}