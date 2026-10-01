import { useState } from "react";
export default function Navbar({ darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <h2>Sapore Italiano</h2>

      <button
        className="theme-button"
        onClick={onToggleTheme}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((previousValue) => !previousValue)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      <div
        id="main-navigation"
        className={menuOpen ? "nav-links is open" : "nav-links"}
      >
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <a href="#featured">Special</a>
        <a href="#booking">Booking</a>
      </div>
    </nav>
  );
}
