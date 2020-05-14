import * as types from "./actionTypes";

export function addCounter() {
  return {
    type: types.ADD_COUNTER,
  };
}
export function removeCounter(index) {
  return {
    type: types.REMOVE_COUNTER,
    index,
  };
}
export function increment(index) {
  return {
    type: types.INCREMENT,
    index,
  };
}
export function decrement(index) {
  return {
    type: types.DECREMENT,
    index,
  };
}
