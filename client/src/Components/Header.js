import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Job.Co</Link>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Find Jobs</Link></li>
            <li><Link to="/companies" className="nav-link">Browse Companies</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;