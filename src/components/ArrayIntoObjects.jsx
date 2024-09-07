import React from "react";

const ArrayIntoObjects = () => {
  const fruits = [
    { id: 1, name: "red", calories: 50 },
    { id: 2, name: "yellow", calories: 20 },
    { id: 3, name: "orange", calories: 15 },
    { id: 4, name: "mango", calories: 24 },
    { id: 5, name: "pineapple", calories: 58 },
    { id: 6, name: "banana", calories: 45 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER//

  const lowCalFruit = fruits.filter((value) => value.calories < 30); //FILTERING

  //key - each object name should be diff//
  const ListItems = lowCalFruit.map((value) => (
    <li key={value.id}>
      {value.name} : &nbsp; <b>{value.calories}</b>
    </li>
  ));

  return <ol>{ListItems}</ol>;
};

export default ArrayIntoObjects;
