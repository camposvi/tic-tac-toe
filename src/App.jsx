import { useState } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));
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
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
