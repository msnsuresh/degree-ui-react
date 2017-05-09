export const appReducer = (state = { isLoading: false, response: []}, action) => {
  switch(action.type) {
    case 'GET_DEGREE_REQUEST':
      return Object.assign({}, state, { isLoading: true, response: [] });
    case 'GET_DEGREE_DONE':
      return Object.assign({}, state, { isLoading: false, response: action.response });
    default:
      return state;
  }
};