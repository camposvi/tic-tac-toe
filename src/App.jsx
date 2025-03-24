import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Player from './components/Player/Player.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import GameOver from './components/GameOver/GameOver.jsx';
import Log from './components/Log/Log.jsx';
import { WINNING_COMBINATIONS } from './utils/winning-combination.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
};

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  //const [activePlayer, setActivePlayer] = useState('X');
  let winner = null;
  const activePlayer = deriveActivePlayer(gameTurns);
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player1"
              symbol="X"
              isActive={activePlayer === 'X'}
            />
            <Player
              initialName="Player2"
              symbol="O"
              isActive={activePlayer === 'O'}
            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} />}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
};

export default App;
