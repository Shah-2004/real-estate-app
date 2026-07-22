import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  // Active review index for interactive slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [clientName, setClientName] = useState('');
  const [clientComment, setClientComment] = useState('');

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Bought a Villa in Jaipur',
      comment: 'EstateHub made finding my dream home so easy! Zero brokerage and direct owner chat saved me lakhs of rupees. Highly recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Priya Verma',
      role: 'Rented Apartment in Delhi',
      comment: 'The property verification is 100% genuine. No fake listings or spam calls unlike other broker platforms. Amazing experience!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Sold Property in Mumbai',
      comment: 'Listing my property took less than 2 minutes, and I got verified buyer leads within a week. Truly a seamless platform!',
      rating: 4.5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${clientName}! Your review has been submitted successfully.`);
    setClientName('');
    setClientComment('');
    setShowReviewModal(false);
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Real stories from people who found their homes through EstateHub.</p>
        </div>

        {/* Interactive Testimonial Card Slider */}
        <div className="testimonial-card-interactive">
          <div className="testimonial-stars">
            {'★'.repeat(Math.floor(activeReview.rating))}
            <span className="rating-number">({activeReview.rating})</span>
          </div>

          <p className="testimonial-comment">"{activeReview.comment}"</p>

          <div className="testimonial-client-info">
            <img src={activeReview.avatar} alt={activeReview.name} className="client-avatar" />
            <div>
              <h3>{activeReview.name}</h3>
              <p>{activeReview.role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="testimonial-controls">
            <button onClick={handlePrev} className="control-btn">‹ Prev</button>
            <div className="indicator-dots">
              {testimonials.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot ${currentIndex === idx ? 'active-dot' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                ></span>
              ))}
            </div>
            <button onClick={handleNext} className="control-btn">Next ›</button>
          </div>
        </div>

        {/* Add Review Trigger */}
        <div className="add-review-trigger">
          <button onClick={() => setShowReviewModal(true)} className="add-review-btn">
            + Share Your Experience
          </button>
        </div>

      </div>

      {/* Interactive Review Modal */}
      {showReviewModal && (
        <div className="modal-overlay" onClick={() => setShowReviewModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowReviewModal(false)}>×</button>
            <h2>Write a Review</h2>
            <form onSubmit={handleReviewSubmit} className="review-form">
              <div className="input-group" style={{marginBottom: '15px'}}>
                <label>Your Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Rohit Kumar" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{width: '100%', padding: '10px', background: '#1f2937', border: '1px solid #374151', color: '#fff', borderRadius: '6px', marginTop: '5px'}}
                />
              </div>
              <div className="input-group" style={{marginBottom: '15px'}}>
                <label>Your Feedback</label>
                <textarea 
                  required 
                  rows="4" 
                  placeholder="Write your experience..." 
                  value={clientComment}
                  onChange={(e) => setClientComment(e.target.value)}
                  style={{width: '100%', padding: '10px', background: '#1f2937', border: '1px solid #374151', color: '#fff', borderRadius: '6px', marginTop: '5px'}}
                ></textarea>
              </div>
              <button type="submit" className="contact-owner-btn">Submit Review</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;