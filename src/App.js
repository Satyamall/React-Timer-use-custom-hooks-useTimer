import useTimer from "./hook/useTimer";
import "./styles.css";

export default function App() {
  const { value, startTimer, pauseTimer, resetTimer } = useTimer({
    initialValue: 20
  });
  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>{value}!</h2>
      <button onClick={startTimer}>START</button>
      <button onClick={pauseTimer}>PAUSE</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}
