import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';
import Title from './Components/Title';
import background from './background.jpg'

function App() {
  return (
    <>
      <Title />
      <div className="App" div style={{ backgroundImage: `url(${background})` }}>
        <CountdownTimer
          countdownTimestampMs={1703453498536} />
      </div>
    </>
  );
}

export default App;

// 1643673600000 time all set to 0
// 1743673600000 working countdown time
