// //=============================================================================
// // Building a Tic Tac Toe Game!

// Game Requirements Analysis ---
/*
   Game
    -> Board
        -> Square
    -> Hostory
*/
// //=============================================================================

import { useState } from "react";

// Square component
function Square({ value, onSquareClick }) {
  // taking the props, using object destructuring

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
  const winner = calculateWinner(squares);
  // console.log(winner); // X / O

  let status;
  if (winner) {
    status = `Winner: ${winner}`; // there is a winner!
  } else {
    status = "Next Player " + (xIsNext ? "X" : "O"); // toggling another player in UI
  }

  // click event handler function
  function handleClick(i) {
    if (squares[i] || winner) {
      // Get out from the handler function if there is any value in i (squares[i] == 1).
      // And there is any winner!
      return;
    }

    const nextSquares = squares.slice(); // creating a copy from the squares array
    // checking the 'X' or 'O' events
    if (xIsNext) {
      nextSquares[i] = "X";
    } else nextSquares[i] = "O";

    setSquares(nextSquares); // updating the squares array
    setXIsNext(!xIsNext); // Toggling the xIsNext state/ to the another player.
  }
  // console.log(squares);

  return (
    <>
      <div className="grid  place-items-center place-content-center">
        <h1 className="text-2xl mb-3">Tic Tac Toe Game!</h1>
        <p>{status}</p>
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
      </div>
    </>
  );
}

// calculating the winner --- this function will check every time.
function calculateWinner(squares) {
  // console.log(squares); // squares array will pass here with every clicks of any player
  const winningLines = [
    // horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal lines
    [6, 4, 2],
    [8, 4, 0],
  ];
  // looping over the winning lines
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    // console.log(a, b, c); // Ex. 0, 3, 6 -- these are winning lines.
    // console.log(squares[a], squares[b], squares[c]);
    // Ex. X, X, X; squres[0] == X; squares[3] == X; squares[6] == X;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // there is a winner!
    }
  }
  return null; // there is no winner
}
