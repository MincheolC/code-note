import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/modules/counter";
import Counter from "./Counter";

function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
