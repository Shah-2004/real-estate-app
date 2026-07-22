
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* Header Section */}
        <div className="about-header">
          <h1>About EstateHub</h1>
          <p>Redefining the real estate experience with transparency, trust, and zero brokerage.</p>
        </div>

        {/* Story Section */}
        <div className="about-story-grid">
          <div className="story-text">
            <h2>Our Mission & Vision</h2>
            <p>
              Founded with a vision to eliminate middlemen and hidden commissions, EstateHub connects home buyers, tenants, and sellers directly. We believe that finding your dream home should be a joyful experience, not a stressful hassle.
            </p>
            <p>
              Over the years, we have verified thousands of properties and helped families across major cities find spaces they love to call home.
            </p>
          </div>
          <div className="story-img-box">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" 
              alt="Team discussing real estate" 
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats-grid">
          <div className="stat-box">
            <h3>10K+</h3>
            <p>Verified Properties</p>
          </div>
          <div className="stat-box">
            <h3>12K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box">
            <h3>25+</h3>
            <p>Cities Covered</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Transparency</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;