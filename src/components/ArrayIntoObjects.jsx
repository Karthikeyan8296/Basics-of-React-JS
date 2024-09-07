import React from "react";
import PropTypes from "prop-types";

const ArrayIntoObjects = (props) => {
  const itemList = props.items; //Calling that Array of objects
  const category = props.category;

  itemList.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER//
  const lowCalFruit = itemList.filter((value) => value.calories < 30); //FILTERING

  //key - each object name should be diff//
  const ListItems = itemList.map((value) => (
    <li key={value.id}>
      {value.name} : &nbsp; <b>{value.calories}</b>
    </li>
  ));

  return (
    <>
      <h3>{category}</h3> <ol>{ListItems}</ol>
    </>
  );
};

//User-difined Types//
ArrayIntoObjects.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

export default ArrayIntoObjects;
