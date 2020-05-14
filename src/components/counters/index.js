import React from "react";
import { Counter } from "../counter";
import { connect } from "react-redux";
import * as actions from "../../redux-flow/reducers/counters/counterActions";
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
  addCounter: () => dispatch(actions.addCounter()),
  removeCounter: (index) => () => dispatch(actions.removeCounter(index)),
  increment: (index) => () => dispatch(actions.increment(index)),
  decrement: (index) => () => dispatch(actions.decrement(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
