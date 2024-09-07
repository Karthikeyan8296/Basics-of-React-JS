import { React, useState } from "react";

const UseStateComponent = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const UpdateName = () => {
    setName("Karthik");
  };

  const IncrementAge = () => {
    setAge(age + 1);
  };

  const toggeleEmployedstatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={UpdateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={IncrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggeleEmployedstatus}>Employed status</button>
    </div>
  );
};

export default UseStateComponent;
