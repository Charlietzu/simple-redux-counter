import React from "react";

export const Counter = ({ counter, increment, decrement, removeCounter }) => (
  <div style={{ position: "relative", border: " 1px solid #000", padding: 5 }}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={removeCounter}>&times;</button>
    <button onClick={increment}>+</button>
  </div>
);

export default Counter;
