// //=============================================================================
// // Building a Tic Tac Toe Game!
// //=============================================================================

import { useState } from "react";

// Square component
function Square({ value, onSquareClick }) {
  // taking the props using object destructuring

  return (
    <button
      className="bg-white border border-gray-200 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

// Board component
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // 9 elements in the array
  // console.log(squares); //  [null, null, null, null, null, null, null, null, null]

  // react re-renders the JSX when, we change the state value by any interactions.
  const [xIsNext, setXIsNext] = useState(true);

  // event handler function
  function handleClick(i) {
    // console.log("clicked!");

    if (squares[i]) {
      return; // Get out from the handler function if there is any value in i (squares[i] == 1).
    }

    const nextSquares = squares.slice(); // creating a copy from the squares array
    // checking the 'X' or 'O' events
    if (xIsNext) {
      nextSquares[i] = "X";
    } else nextSquares[i] = "O";

    setSquares(nextSquares); // updating the squares array
    setXIsNext(!xIsNext); // Toggling the xIsNext state
  }
  // console.log(squares);
  return (
    <>
      {/* We need 9 squares to build the game */}
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        {/* Here, the props are passing as a object to the Square component */}
      </div>
    </>
  );
}
