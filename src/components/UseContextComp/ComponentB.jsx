import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div className="box">
      <h3>ComponentB</h3>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
