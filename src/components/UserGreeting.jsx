import React from "react";

//Conditional rendering//
const UserGreeting = (props) => {
  if (props.isLoggedin) {
    return <h3>Welcome {props.userName}</h3>;
  } else {
    return <h2>Need an user login</h2>;
  }
};

export default UserGreeting;