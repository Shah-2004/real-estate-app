import React, { useState } from 'react';
import './OurAdvantages.css';

const OurAdvantages = () => {
  // Track active/selected advantage card for interactive details view
  const [activeCard, setActiveCard] = useState(null);

  const advantages = [
    {
      id: 1,
      title: 'Zero Brokerage',
      subtitle: 'Save your hard-earned money',
      desc: 'Direct connection with property owners. No middlemen, no hidden commission fees on buying or renting.',
      icon: '💸',
      badge: 'Popular'
    },
    {
      id: 2,
      title: '100% Verified Properties',
      subtitle: 'Legal & physical check done',
      desc: 'Every single listing goes through rigorous legal title checks and physical verification by our experts.',
      icon: '🛡️',
      badge: 'Trusted'
    },
    {
      id: 3,
      title: 'Direct Owner Chat',
      subtitle: 'Instant & transparent communication',
      desc: 'Chat or call owners directly without any privacy leakage or unwanted spam calls.',
      icon: '💬',
      badge: 'Fast'
    },
    {
      id: 4,
      title: 'End-to-End Assistance',
      subtitle: 'From visit to paperwork',
      desc: 'We assist you through free site visits, home loan approvals, and legal documentation paperwork.',
      icon: '🤝',
      badge: '24/7 Support'
    }
  ];

  return (
    <section className="advantages-section">
      <div className="advantages-container">
        
        {/* Section Header */}
        <div className="section-header-advantages">
          <h2>Why Choose EstateHub?</h2>
          <p>We make finding your dream home transparent, fast, and completely stress-free.</p>
        </div>

        {/* Interactive Grid */}
        <div className="advantages-grid">
          {advantages.map((item) => {
            const isExpanded = activeCard === item.id;
            return (
              <div 
                key={item.id} 
                className={`advantage-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => setActiveCard(isExpanded ? null : item.id)}
              >
                <div className="advantage-top">
                  <span className="advantage-icon">{item.icon}</span>
                  <span className="advantage-badge">{item.badge}</span>
                </div>

                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                
                <p className="advantage-desc">{item.desc}</p>

                <button className="expand-toggle-btn">
                  {isExpanded ? 'Show Less ▲' : 'Learn More ▼'}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurAdvantages;