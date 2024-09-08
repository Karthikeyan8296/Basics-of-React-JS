import { React, useState } from "react";

const UpdateArrayObjects = () => {
  const [cars, setCars] = useState([]);
  const [carsYear, setCarsYear] = useState(new Date().getFullYear());
  const [carsMake, setCarsMake] = useState("");
  const [carsModel, setCarsModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carsYear, make: carsMake, model: carsModel };
    setCars((prevCars) => [...prevCars, newCar]);

    //reset after adding
    setCarsYear(new Date().getFullYear());
    setCarsMake("");
    setCarsModel("");
  };
  const handleRemoveCar = (index) => {
    setCars(cars.filter((elements, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setCarsYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setCarsMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarsModel(e.target.value);
  };

  return (
    <div>
      <h2>List of Car - Update Array Objects</h2>
      <ul>
        {cars.map((value, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {value.year} {value.make} {value.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carsYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carsMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carsModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add car</button>
    </div>
  );
};

export default UpdateArrayObjects;
