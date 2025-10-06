// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.tsx';

function Navbar() {
  const { theme, toggleTheme } = useTheme(); // Must be inside function body

  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/study">Study Mode</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><button onClick={toggleTheme}>Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;