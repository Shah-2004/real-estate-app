
//* Footer 
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-minimal">
      <div className="footer-minimal-container">
        
        {/* Left: Brand & Tagline */}
        <div className="footer-brand-box">
          <h3>Estate<span>Hub</span></h3>
          <p>Your trusted partner for zero-brokerage verified properties.</p>
        </div>

        {/* Center: Clean Links */}
        <div className="footer-nav-links">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right: Copyright */}
        <div className="footer-copy-box">
          <p>© {new Date().getFullYear()} EstateHub. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;