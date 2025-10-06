// src/context/TimerContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react'; // Use type-only import

interface TimerContextType {
  isRunning: boolean;
  timeLeft: number; // Time in seconds
  mode: 'work' | 'break';
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default: 25 minutes
  const [mode, setMode] = useState<'work' | 'break'>('work');

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60); // Reset to 25 minutes
    setMode('work');
  };

  return (
    <TimerContext.Provider value={{ isRunning, timeLeft, mode, startTimer, pauseTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
}