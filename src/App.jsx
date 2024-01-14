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
function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares); // winner => X / O

  let status;
  if (winner) {
    status = `Winner: ${winner}`; // there is a winner!
  } else {
    status = "Next Player " + (xIsNext ? "X" : "O"); // toggling another player in UI
  }

  // click event handler function
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      // Get out from the handler function if there is any value in i (squares[i] == 1).
      // And there is any winner!
      return;
    }

    const nextSquares = squares.slice(); // creating a copy from the squares array
    // checking the 'X' or 'O' events
    if (xIsNext) {
      nextSquares[i] = "X";
    } else nextSquares[i] = "O";

    onPlay(nextSquares); // updating the handler while playing
  }

  return (
    <>
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
    </>
  );
}

// History component
function History({ moves }) {
  return <>{moves}</>;
}

// Game component => Root level component
export default function Game() {
  // creating a array of array elements for creating the history
  const [history, setHistory] = useState([Array(9).fill(null)]); // 9 elements a the array with 9 arrays
  const [xIsNext, setXIsNext] = useState(true);

  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove]; // latest move

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext); // Toggling the xIsNext state/ to the another player.moves
    // Taking the moves from 0 to latest.
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory); // updating the history arrays
    setCurrentMove(nextHistory.length - 1);
  }

  // time travelling to the game history
  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0); // if move is even (starts from 0) -> player "X", otherwise "0" will play.
  }
  // looping through the history array
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      // game starts
      description = `Go to move # ${move}`;
    } else {
      description = `Go to start the game`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="flex items-center justify-center gap-5 py-10">
      <div>
        {/* Game Board */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div>
        <ol>
          {/* Game History */}
          <History moves={moves} />
        </ol>
      </div>
    </div>
  );
}

// calculating the winner => this function will check every time.
function calculateWinner(squares) {
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
    // checking for the winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // there is a winner!
    }
    // Ex. (a,b,c) => (0, 3, 6) => winning lines.
    // Ex. if it is X, X, X; Then, squres[0] == X; squares[3] == X; squares[6] == X;
  }
  return null; // there is no winner
}
