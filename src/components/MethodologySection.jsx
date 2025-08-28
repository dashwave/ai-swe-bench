import React from 'react';
import './MethodologySection.css';

const MethodologySection = () => {
  return (
    <section id="methodology" className="section methodology-section">
      <div className="container">
        <div className="section-title">
          <h2>Research Methodology</h2>
        </div>
        <div className="section-subtitle">
          A systematic approach to evaluating AI software engineering agents
        </div>

        <div className="methodology-intro">
          <p className="intro-text">
            Our benchmarking framework evaluates AI agents through real-world GitHub issue resolution, 
            combining automated metrics with human expert review for comprehensive assessment.
          </p>
        </div>

        <div className="methodology-process">
          <div className="process-steps">
            <div className="process-step">
              <div className="step-content">
                <h4>Issue Selection</h4>
                <p>Curate diverse GitHub issues from established open source projects</p>
              </div>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-content">
                <h4>Agent Processing</h4>
                <p>AI agents analyze issues and generate comprehensive solutions</p>
              </div>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-content">
                <h4>PR Generation</h4>
                <p>Create production-ready pull requests with code, tests, and documentation</p>
              </div>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-content">
                <h4>Evaluation</h4>
                <p>Assess using automated metrics and human expert review</p>
              </div>
            </div>
          </div>
        </div>

        <div className="evaluation-criteria">
          <h3>Evaluation Criteria</h3>
          <div className="criteria-grid">
            <div className="criterion-card">
              <h4>Functional Correctness</h4>
              <p>Bug-free execution and complete feature implementation</p>
            </div>

            <div className="criterion-card">
              <h4>Code Quality</h4>
              <p>Readability, maintainability, and adherence to best practices</p>
            </div>

            <div className="criterion-card">
              <h4>Performance</h4>
              <p>Runtime efficiency and resource optimization</p>
            </div>

            <div className="criterion-card">
              <h4>Testing</h4>
              <p>Test coverage, error handling, and reliability</p>
            </div>

            <div className="criterion-card">
              <h4>Response Time</h4>
              <p>Speed and efficiency of solution generation</p>
            </div>
          </div>
        </div>

        <div className="methodology-note">
          <p>
            <strong>Note:</strong> Each criterion is scored on a 10-point scale, with final scores 
            calculated as weighted averages. The evaluation framework is continuously refined based on 
            community feedback and emerging best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
