import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

//Consumer Component//
const ComponentD = () => {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h3>ComponentD</h3>
      <p>{`Bye ${user}`}</p>
    </div>
  );
};

export default ComponentD;
