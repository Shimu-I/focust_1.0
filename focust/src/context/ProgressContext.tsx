// src/context/ProgressContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react'; // Use type-only import

interface ProgressContextType {
  completedSessions: number;
  addSession: () => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedSessions, setCompletedSessions] = useState(0);

  const addSession = () => setCompletedSessions((prev) => prev + 1);
  const resetProgress = () => setCompletedSessions(0);

  return (
    <ProgressContext.Provider value={{ completedSessions, addSession, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}