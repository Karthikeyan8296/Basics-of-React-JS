import { React, useState } from "react";

const UpdateStateArray = () => {
  const [fruits, setFruits] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFruit = () => {
    const newfruit = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = ""; //after giving input..then clear it//

    setFruits((prevFruit) => [...prevFruit, newfruit]); //its better to use updater function//
  };

  const handleRemoveFruit = (index) => {
    setFruits(fruits.filter((elements, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Fruits</h2>
      <ul>
        {fruits.map((value, index) => (
          <li key={index} onClick={() => handleRemoveFruit(index)}>
            {value}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter Fruits Name" />
      <button onClick={handleAddFruit}>Add Fruits</button>
    </div>
  );
};

export default UpdateStateArray;
