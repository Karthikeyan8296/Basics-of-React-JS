import { React, useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`; //function//
  }, [count]); //dependances//

  const handleAddCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  };

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={handleAddCount}>Add</button>
      <button onClick={handleSubCount}>Sub</button>
      <br />
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default UseEffectHook;
