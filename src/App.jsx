import Header from './components/Header/Header';
import Player from './components/Player/Player';
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
          GAME BOARD
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
