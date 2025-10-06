// src/components/PomodoroTimer.tsx
import { useEffect } from 'react';
import { useTimer } from '../context/TimerContext.tsx';

function PomodoroTimer() {
  const { isRunning, timeLeft, mode, startTimer, pauseTimer, resetTimer } = useTimer();

  useEffect(() => {
    let interval: number | null = null; // Should be number | null
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {}, 1000); // Placeholder logic
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro-timer">
      <h2>Pomodoro Timer</h2>
      <div className="timer-display">{formatTime(timeLeft)}</div>
      <p>Mode: {mode.charAt(0).toUpperCase() + mode.slice(1)}</p>
      <div className="timer-controls">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;