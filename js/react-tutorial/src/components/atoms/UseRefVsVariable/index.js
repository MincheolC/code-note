// https://velog.io/@pks787/useRef-vs-variable-useState-%EC%B0%A8%EC%9D%B4%EC%A0%90
import React, { useState, useEffect, useRef } from 'react';

let count = 0;
function CounterWithVariable() {
  const [counter, setCounter] = useState(0);
  count = counter;

  useEffect(() => {
    setTimeout(() => {
      console.log('CounterWithVariable: ', count, counter);
    }, 3000);
  }, [counter]);

  return (
    <div>
      <p>CounterWithVariable: {counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>click</button>
    </div>
  )
}

// useRef의 ref의 current 값을 변경하지 않으면 초기값을 유지함.
function CounterWithUseRef() {
  const [counter, setCounter] = useState(0);
  const latestCount = useRef(counter);

  useEffect(() => {
    setTimeout(() => {
      console.log('CounterWithUseRef: ', latestCount.current, counter);
    }, 3000);
  }, [counter]);

  return (
    <div>
      <p>CounterWithUseRef: {counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>click</button>
    </div>
  )
}

export default function UseRefVsVariable() {
  return (
    <>
      <CounterWithVariable />
      <CounterWithUseRef />
    </>
  )
}
