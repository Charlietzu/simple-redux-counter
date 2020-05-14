export default (state, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      //concat method returns a new array.
      return state.concat(0);
    case "REMOVE_COUNTER":
      /**we use "_" because we need the first parameter to iterate thru the second (index)
         but we don't use the first one in any moment.*/
      return state.filter((_, index) => index !== action.index);
  }
};
