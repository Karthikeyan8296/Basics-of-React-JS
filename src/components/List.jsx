import React from "react";

const List = () => {
  const fruits = ["red", "yellow", "orange", "mango", "pineapple", "banana"];

  const ListItems = fruits.map((value) => <li>{value}</li>);

  return <ul>{ListItems}</ul>;
};

export default List;
