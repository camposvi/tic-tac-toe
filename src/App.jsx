import Header from './components/Header/Header';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player1" symbol="X" />
            <Player initialName="Player2" symbol="O" />
          </ol>
          <GameBoard />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
