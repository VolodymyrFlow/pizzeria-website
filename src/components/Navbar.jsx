import { useState } from "react";
export default function Navbar({ darkMode, onToggleTheme, totalItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };
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
        className={menuOpen ? "nav-links is-open" : "nav-links"}
      >
        <a href="#home" onClick={handleNavLinkClick}>
          Home
        </a>
        <a href="#menu" onClick={handleNavLinkClick}>
          Menu
        </a>
        <a href="#order" onClick={handleNavLinkClick}>
          Cart ({totalItems})
        </a>
        <a href="#about" onClick={handleNavLinkClick}>
          About
        </a>
        <a href="#gallery" onClick={handleNavLinkClick}>
          Gallery
        </a>
        <a href="#contact" onClick={handleNavLinkClick}>
          Contact
        </a>
        <a href="#featured" onClick={handleNavLinkClick}>
          Special
        </a>
        <a href="#booking" onClick={handleNavLinkClick}>
          Booking
        </a>
      </div>
    </nav>
  );
}
