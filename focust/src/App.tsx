// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Dashboard from './pages/Dashboard.tsx';
import StudyMode from './pages/StudyMode.tsx';
import Settings from './pages/Settings.tsx';
import About from './pages/About.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { TimerProvider } from './context/TimerContext.tsx';
import { ProgressProvider } from './context/ProgressContext.tsx';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <TimerProvider>
        <ProgressProvider>
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/study" element={<StudyMode />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </ProgressProvider>
      </TimerProvider>
    </ThemeProvider>
  );
}

export default App;