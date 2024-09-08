import { React, useState, useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <input ref={inputRef} type="text" name="" id="" />
    </div>
  );
};

export default UseRef;
