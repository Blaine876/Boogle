export default (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, term: action.payload };

    default:
      return state;
  }
};
