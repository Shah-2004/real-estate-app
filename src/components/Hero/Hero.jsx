
//? Hero.jsx (new Version)
import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('buy');
    const [isLiked, setIsLiked] = useState(false);

    return (
        <>
            <section className="hero-clean-section">
                <div className="hero-clean-container">

                    {/* LEFT COLUMN: Content & Interactive Form */}
                    <div className="hero-clean-left">

                        <div className="hero-badge">
                            <span className="badge-dot"></span> Simple & Transparent Real Estate
                        </div>

                        <h1 className="hero-clean-title">
                            Find a place you'll <br />
                            <span className="text-gradient">love to call home.</span>
                        </h1>

                        <p className="hero-clean-subtitle">
                            Explore 10,000+ verified properties with direct owner contacts and zero hassle.
                        </p>

                        {/* INTERACTIVE SEARCH BOX */}
                        <div className="clean-search-card">

                            {/* Tab System */}
                            <div className="interactive-tabs">
                                <button
                                    className={`tab ${activeTab === 'buy' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('buy')}
                                >
                                    Buy
                                </button>
                                <button
                                    className={`tab ${activeTab === 'rent' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('rent')}
                                >
                                    Rent
                                </button>
                                <button
                                    className={`tab ${activeTab === 'commercial' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('commercial')}
                                >
                                    Commercial
                                </button>
                            </div>

                            {/* Form Inputs */}
                            <div className="clean-form-row">
                                <div className="clean-input-group">
                                    <label>Location</label>
                                    <input type="text" placeholder="City or Area..." />
                                </div>

                                <div className="clean-input-group">
                                    <label>Property Type</label>
                                    <select defaultValue="">
                                        <option value="" disabled>Select Type</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="villa">Villa / House</option>
                                        <option value="plot">Plot / Land</option>
                                    </select>
                                </div>

                                <div className="clean-input-group">
                                    <label>{activeTab === 'rent' ? 'Monthly Rent' : 'Budget'}</label>
                                    <select defaultValue="">
                                        <option value="" disabled>Select Budget</option>
                                        {activeTab === 'rent' ? (
                                            <>
                                                <option value="15k">Under ₹15,000</option>
                                                <option value="30k">₹15k - ₹30k</option>
                                                <option value="50k">Above ₹50k</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="50l">Under ₹50 Lakhs</option>
                                                <option value="1cr">₹50 L - ₹1 Cr</option>
                                                <option value="above1cr">Above ₹1 Cr</option>
                                            </>
                                        )}
                                    </select>
                                </div>

                                <button className="clean-search-btn" onClick={() => alert(`Searching properties for ${activeTab.toUpperCase()}`)}>
                                    Search
                                </button>
                            </div>

                        </div>

                        {/* Clean Metrics */}
                        <div className="clean-stats-row">
                            <div className="clean-stat">
                                <h3>12K+</h3>
                                <p>Properties</p>
                            </div>
                            <div className="clean-stat-divider"></div>
                            <div className="clean-stat">
                                <h3>8.5K+</h3>
                                <p>Happy Families</p>
                            </div>
                            <div className="clean-stat-divider"></div>
                            <div className="clean-stat">
                                <h3>4.9 ★</h3>
                                <p>Top Rated</p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Interactive Visual Card */}
                    <div className="hero-clean-right">
                        <div className="clean-visual-card">
                            <div className="image-container">
                                <img
                                    // src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" 
                                    // alt="Modern Architecture" 

                                    src="/src/assets/images/img1.jpg"
                                    alt="Luxury House"
                                />
                                <button
                                    className={`like-heart-btn ${isLiked ? 'liked' : ''}`}
                                    onClick={() => setIsLiked(!isLiked)}
                                    title="Save Property"
                                >
                                    {isLiked ? '❤️' : '🤍'}
                                </button>
                            </div>

                            <div className="card-info">
                                <div className="card-header">
                                    <h3>The Grand Horizon</h3>
                                    <span className="price-badge">₹1.85 Cr</span>
                                </div>
                                <p className="card-location">📍 Bandra West, Mumbai</p>

                                <div className="property-features">
                                    <span>🛏️ 3 Beds</span>
                                    <span>🚿 3 Baths</span>
                                    <span>📐 1850 sqft</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Hero;