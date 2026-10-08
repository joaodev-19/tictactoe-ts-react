import { useState, ReactNode } from 'react'
import './App.css'

type GameTokens = "X" | "O" | null;

type SquareProps = {
  value: GameTokens;
  handleClick: () => void;
}

type ButtonProps = {
  children: ReactNode,
  onClick: () => void,
  variant?: "primary" | "secondary" | "danger",
  disabled?: boolean,
}

function Square({ value, handleClick }: SquareProps): React.JSX.Element {
  return (
    <button className="square" data-value={value ?? ""} onClick={handleClick}>
      { value }
    </button>
  )
}

function Button({ 
  children,
  onClick,
  variant = "primary",
  disabled = false
 }: ButtonProps): React.JSX.Element {
  return (
    <button
      type='button'
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
 }

function GameStatus({ status, isGameOver, onRestart }: { status: string; isGameOver: boolean; onRestart: () => void }): React.JSX.Element {
  return (
    <div className="game-status">
      <h3>{ status }</h3>

      {isGameOver && (
        <Button onClick={onRestart}>
          Restart Match
        </Button>
      )}
    </div>
  )
}

function Board() {
  const [squares, setSquares] = useState<GameTokens[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  function handleClick(index: number) {
    if (squares[index] || calculateWinner(squares) || isDraw) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = `Draw! Play again!`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const boardSquares = squares.map((square, i) => 
    <Square 
      key={i}
      value={square} 
      handleClick={() => handleClick(i)} 
    />)

  return (
    <div className="game-container">
      <h1 className="game-title">Tic-Tac-Toe</h1>

      <GameStatus status={status} isGameOver={Boolean(winner) || isDraw} onRestart={restartGame}/>

      <div className='board'>
        {boardSquares}
      </div>
    </div>
  )
}

function calculateWinner(squares: readonly GameTokens[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;