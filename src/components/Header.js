import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">
            AISWE Bench
          </a>
          
          <nav className="nav">
            <a href="#benchmarks" className="nav-link">Benchmarks</a>
            <a href="#methodology" className="nav-link">Methodology</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
