import React from "react";

const Button = () => {
  const handleClick1 = () => console.log("oops");
  const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  //e == event parameter//
  const handleClick = (e) => (e.target.textContent = "gomma");

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Click Me </button>
    </div>
  );
};

export default Button;
