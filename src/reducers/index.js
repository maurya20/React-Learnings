const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DOG":
      return { ...state, loading: true };
    case "DOG_RECEIVED":
      return { ...state, dog: action.dog, loading: false };
    default:
      return state;
  }
};
export default reducer;
