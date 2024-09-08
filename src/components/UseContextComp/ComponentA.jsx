import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

//Provider Component//
export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("KarthikDesigner");

  return (
    <div className="box">
      <h3>ComponentA</h3>
      <h2>{`Welcome ${user}`}</h2>

      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
