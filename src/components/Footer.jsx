import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AISWE Bench</h3>
            <p>
              AI Software Engineering Agent Benchmarking platform evaluating real-world performance on open source GitHub issues.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><a href="#methodology">Evaluation Process</a></li>
              <li><a href="#benchmarks">Benchmark Results</a></li>
              <li><a href="#methodology">Scoring System</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:contact@aiswe.dev">contact@aiswe.dev</a></li>
              <li><a href="https://github.com/aiswe-bench" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 AISWE Bench. All rights reserved.</p>
          <div className="sponsor-note">
            <p>Sponsored by <a href="https://dashwave.io" target="_blank" rel="noopener noreferrer">Dashwave</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
