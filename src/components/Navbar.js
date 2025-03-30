import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-header">
      {/* Top Bar */}
      <div className="top-bar">
        {/* Left Side: Logo + Details */}
        <div className="logo-section">
          <img
            src={process.env.PUBLIC_URL + "/logo.jpg"}
            alt="JK industries"
            className="logo-img"
          />
          <div>
            <h1 className="company-name">JK Industries</h1>
            <p className="company-location">📍 MIDC Ambad, Nashik, Maharashtra</p>
            <p className="company-gst">
              ✔ GST No. <strong>27AZUPK4892K1ZD</strong>
            </p>
          </div>
        </div>

        {/* Right Side: Contact Buttons */}
        <div className="header-buttons">
          <a href="tel:8275019040" className="call-button">
            📞 Call 8275019040
          </a>
          <button className="enquiry-button">📩 Send Enquiry</button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <nav className="nav-links">
          <Link to="/" className="nav-home">
            HOME
          </Link>
          <Link to="/company-brief" className="nav-link">
            COMPANY BRIEF
          </Link>
        </nav>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Products/Services"
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
