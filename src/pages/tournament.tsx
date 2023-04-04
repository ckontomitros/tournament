import React, { useState } from "react";

const BracketGenerator = () => {
  const [squares, setSquares] = useState<number[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const count = parseInt(event.target.value);
    const newSquares = Array.from({ length: count }, (_, index) => index + 1);
    setSquares(newSquares);
  }

  return (
    <div>
      <label htmlFor="square-count">Number of squares:</label>
      <input
        id="square-count"
        type="number"
        min="1"
        max="16"
        onChange={handleInputChange}
      />
      {squares.map((square) => (
        <div
          key={square}
          style={{
            width: "50px",
            height: "50px",
            border: "1px solid black",
            display: "inline-block",
            margin: "10px",
          }}
        >
          {square}
        </div>
      ))}
    </div>
  );
}

export default BracketGenerator;