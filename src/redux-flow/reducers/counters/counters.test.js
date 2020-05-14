import counters from "./index";
import { expect } from "chai";

it("counters should be a function", () => {
  expect(counters).to.be.a("function");
});

it("should add a counter", () => {
  /*If the initial state is an empty array, then when i execute an action ,add_counter in this case,
    we will have an array with an 0 in it, because that's our default state.*/

  const before = [];
  const action = { type: "ADD_COUNTER" };
  const after = [0];
  expect(counters(before, action)).to.be.deep.equal(after);
});
