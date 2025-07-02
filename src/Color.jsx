import React, { use, useState } from "react";
import "./Color.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple", 'crimson', 'skyblue'];

function Color() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);


  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setCount(count + 1)
  };

  return (

    
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <p>{count}</p>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>

  );
}

export default Color;
