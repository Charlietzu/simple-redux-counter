import React from "react";
import { Counter } from "../counter";
import { connect } from "react-redux";
import * as types from "../../redux-flow/reducers/counters/actionTypes";

const Counters = ({
  counters,
  addCounter,
  removeCounter,
  increment,
  decrement,
}) => (
  <div>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {console.log(counters)}
      {counters.map((counter, index) => (
        <Counter
          key={index}
          counter={counter}
          removeCounter={removeCounter(index)}
          increment={increment(index)}
          decrement={decrement(index)}
        />
      ))}
    </div>
    <div
      style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}
    >
      <button onClick={addCounter}>Add counter</button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  counters: state,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch({ type: types.ADD_COUNTER }),
  removeCounter: (index) => () =>
    dispatch({ type: types.REMOVE_COUNTER, index }),
  increment: (index) => () => dispatch({ type: types.INCREMENT, index }),
  decrement: (index) => () => dispatch({ type: types.DECREMENT, index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
