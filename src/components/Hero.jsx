import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            AI Software Engineering Agent Benchmarking
          </h1>
          <p className="hero-subtitle">
            Evaluating AI agents on real-world open source GitHub issues through automated PR generation and assessment
          </p>
          
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">AI Agents</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">GitHub Issues</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">PRs Generated</div>
            </div>
          </div>
          
          <div className="hero-cta">
            <a href="#benchmarks" className="btn btn-primary">
              View Benchmarks
            </a>
            <a href="#methodology" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
