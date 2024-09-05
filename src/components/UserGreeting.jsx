import React from "react";
import PropTypes from "prop-types";

//Conditional rendering//
const UserGreeting = (props) => {
  if (props.isLoggedin) {
    return <h3>Welcome {props.userName}</h3>;
  } else {
    return <h2>Need an user login</h2>;
  }
};

UserGreeting.propTypes = {
  isLoggedin: PropTypes.bool,
  userName: PropTypes.string,
};
export default UserGreeting;
