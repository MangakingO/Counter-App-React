import React, { useState } from "react";

function IncrementButtons() {
  const [count, setCount] = useState(0);   // count represents the counter value and setCount represents a way to update count
  const [lastPressed, setLastPressed] = useState(null); // lastPressed stores the value of the last button pressed and setLastPressed is what we use to update

  // event handler for clicks
  const handleClick = (label) => {
    setLastPressed(label);  // this function takes in the label value and outputs the appropriate function
    if (label === "One") {
      setCount((prevCount) => prevCount + 1); // if label is equal to "One", previous count is retrieved and incremented by one
    } else if (label === "Two") {
      setCount((prevCount) => prevCount + 1); // if label is equal to "Two", the previous count is retrieved and incremened twice by the functions
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (   // the button creates a onClick hood that creates a value for the label variable and loads that set value depending on if its corresponding button was pressed
    <div>
      <h3>Last Pressed: {lastPressed}</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => handleClick("One")}>One</button>
      <button onClick={() => handleClick("Two")}>Two</button>
    </div>
  );
}

export default IncrementButtons;

