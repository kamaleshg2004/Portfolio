import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      <div className="logo">MyPortfolio</div>
      <nav className={`nav ${isMobile ? 'active' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? 'X' : '☰'} {/* Toggle between hamburger and close */}
      </div>
    </header>
  );
}
