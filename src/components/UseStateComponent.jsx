import { React, useState } from "react";

const UseStateComponent = () => {
  let [name, setName] = useState("Guest");

  const updateName = () => {
    setName("Karthik");
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
};

export default UseStateComponent;
