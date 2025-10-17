import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
const arr = [1,5,10,15];

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        
        {arr.map(item => <TimerChallenge key={item} title="Easy" targetTime={item} />)} {/* This is a chorter way to render multiple components with different props helped whit an array and map function */}
        
        {/* <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} /> */}
      </div>
    </>
  );
}

export default App;
