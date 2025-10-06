import PomodoroTimer from "./components/PomodoroTimer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Focust</h1>
        <span>Your Personal Study Companion</span>
      </header>

      <div className="main">
        <div className="sidebar">
          <p>Session History</p>
          <p>Upcoming Features</p>
          <p>Settings</p>
        </div>

        <PomodoroTimer />
      </div>
    </div>
  );
}

export default App;
