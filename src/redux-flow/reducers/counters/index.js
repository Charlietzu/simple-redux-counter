import * as types from "./actionTypes";

export const initialState = [];

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_COUNTER:
      //concat method returns a new array.
      return state.concat(0);
    case types.REMOVE_COUNTER:
      return state.filter((counter, index) => index !== action.index);
    case types.INCREMENT:
      return state.map((counter, index) =>
        index === action.index ? counter + 1 : counter
      );
    case types.DECREMENT:
      return state.map((counter, index) =>
        index === action.index ? counter - 1 : counter
      );
    default:
      return state;
  }
}
