import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkEndGame, checkWinner } from "./board";

function App() {

  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(() => {
    let turnFromStorage = window.localStorage.getItem('turn')
    turnFromStorage = JSON.parse(turnFromStorage)
    return turnFromStorage ?? TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    
    if (board[index] || winner) return
    
    const newBoard = [...board];
    newBoard[index] = turn
    setBoard(newBoard)
    
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))

    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  };

  return (
    <main className="board">
      {/* <h1>Tic tac toe</h1> */}
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>

      </section>
      {
        winner != null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    :'Ganó' 
                }
              </h2>
              <header className="win">
                {winner && <Square> {winner} </Square>}
              </header>

              <footer>
                <button onClick={resetGame} >Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }

    </main>
  );
}

export default App;
