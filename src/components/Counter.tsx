import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
  const { count, incrementCount, incrementCountByNumber } = useCounter();
  return (
    <div>
      <div>count : {count}</div>
      <button onClick={incrementCount}>up!</button>
      <button onClick={() => incrementCountByNumber(2)}>+2 up</button>
    </div>
  );
};

export default Counter;
