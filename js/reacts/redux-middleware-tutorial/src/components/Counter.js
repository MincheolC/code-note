import React from "react";

function Counter(props) {
  const { number, onIncrease, onDecrease } = props;
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
