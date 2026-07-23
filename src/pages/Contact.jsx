
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Yahan aap backend API call ya email service integrate kar sakte hain
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h1>Get In Touch With Us</h1>
          <p>Have questions about a property or need assistance? Our team is here to help you 24/7.</p>
        </div>

        <div className="contact-content-grid">
          
          {/* Contact Info Box */}
          <div className="contact-info-card">
            <h2>Contact Information</h2>
            <p>Fill out the form or reach out to us directly through our office channels.</p>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Our Office</h4>
                <p>Bandra West, Mumbai, Maharashtra 400050</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone Number</h4>
                <p>+91 98765 43210 / +91 01234 56789</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email Address</h4>
                <p>support@estatehub.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We will get back to you shortly.</p>
                <button 
                  className="reset-btn" 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Send Us A Message</h2>

                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="e.g. Rahul Sharma" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="9876543210" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    required 
                    placeholder="How can we help you?" 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;