import React from "react";
import profile from "../assets/profile.jpg";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card">
      <img className="img" src={profile} alt="profile" />
      <h3>{props.name}</h3>
      <h4 className="Since">Sinces {props.year}</h4>
      <p className="txt">{props.discription}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  discription: PropTypes.string,
};

Card.defaultProps = {
  name: "Nothing",
  year: 1999,
  discription: "oops, there is some internal error!!!",
};

export default Card;
