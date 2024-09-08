import React, { useEffect, useState } from "react";

const ResponsiveUseEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listerner added");

    //by adding a return statement we can clean up the console//
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listerner removed");
    };
  }, []);

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
};

export default ResponsiveUseEffect;
