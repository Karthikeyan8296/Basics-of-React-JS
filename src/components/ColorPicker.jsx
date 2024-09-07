import { React, useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div className="color-picker-container">
        <h2>Color Picker</h2>
        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
        <div
          className="color=display"
          style={{ backgroundColor: color, padding: 20, maxWidth: 400 }} //we need to give double braket for having styles
        >
          <p>Selected Color: {color}</p>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
