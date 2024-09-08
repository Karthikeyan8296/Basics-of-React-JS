import React, { useState } from "react";

const CounterUpdater = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1); //Updater Function
    setCount((prevCount) => prevCount + 1); //we can rename it as (prevCount or c)//
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1); //Updater Function
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterUpdater;
