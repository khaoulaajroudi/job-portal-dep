import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
        <h3>For Job Seekers</h3>
            <ul>
              <li><a href="#browse-jobs">Browse Jobs</a></li>
              <li><a href="#browse-companies">Browse Companies</a></li>
              <li><a href="#career-advice">Career Advice</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>For Employers</h3>
            <ul>
              <li><a href="#post-job">Post a Job</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><a href="#about">About JobPortal</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
)}
export default Footer