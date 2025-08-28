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
              AI Software Engineering Agent Benchmarking platform evaluating 
              real-world performance on open source GitHub issues.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Methodology</h4>
            <ul>
              <li><a href="#methodology">Evaluation Process</a></li>
              <li><a href="#benchmarks">Benchmark Results</a></li>
              <li><a href="#scoring">Scoring System</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@aiswe.dev">contact@aiswe.dev</a></li>
              <li><a href="https://github.com/aiswe-bench">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; 2024 AISWE Bench. All rights reserved.</p>
            <p>
              Sponsored by{' '}
              <a href="https://dashwave.com" className="sponsor-link">
                Dashwave
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
