// import React from 'react'


// const Properties = () => {
//   return (
//     <>
    
//       <h1>Properties</h1>
//     </>
//   )
// }

// export default Properties



import React, { useState } from 'react';
import '../styles/Properties.css'

const Properties = () => {
  // Filter States
  const [filterType, setFilterType] = useState('all'); // 'all', 'sale', 'rent'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Properties Data List
  const allProperties = [
    {
      id: 1,
      title: 'Luxury Villa',
      location: 'Jaipur, Rajasthan',
      price: '₹85,00,000',
      tag: 'For Sale',
      type: 'sale',
      beds: 4,
      baths: 3,
      area: '2400 sqft',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Modern Apartment',
      location: 'Delhi',
      price: '₹25,000 / Month',
      tag: 'For Rent',
      type: 'rent',
      beds: 2,
      baths: 2,
      area: '1200 sqft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Family House',
      location: 'Mumbai',
      price: '₹1,20,00,000',
      tag: 'For Sale',
      type: 'sale',
      beds: 5,
      baths: 4,
      area: '3100 sqft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      location: 'Bangalore',
      title: 'Tech Park Commercial Office',
      price: '₹1,50,000 / Month',
      tag: 'For Rent',
      type: 'rent',
      beds: 0,
      baths: 2,
      area: '2200 sqft',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Independent Luxury Plot',
      location: 'Pune',
      price: '₹45,00,000',
      tag: 'For Sale',
      type: 'sale',
      beds: 0,
      baths: 0,
      area: '1800 sqft',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Cozy Studio Apartment',
      location: 'Hyderabad',
      price: '₹18,000 / Month',
      tag: 'For Rent',
      type: 'rent',
      beds: 1,
      baths: 1,
      area: '650 sqft',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Filter Logic based on Tab and Search Query
  const filteredProperties = allProperties.filter((item) => {
    const matchesTab = filterType === 'all' || item.type === filterType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="properties-page">
      <div className="properties-container">
        
        {/* Page Header */}
        <div className="properties-header">
          <h1>Explore All Properties</h1>
          <p>Browse through our verified listings of apartments, villas, plots, and commercial spaces.</p>
        </div>

        {/* Filter & Search Controls */}
        <div className="properties-controls">
          <div className="filter-tabs">
            <button 
              className={filterType === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilterType('all')}
            >
              All Properties
            </button>
            <button 
              className={filterType === 'sale' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilterType('sale')}
            >
              For Sale
            </button>
            <button 
              className={filterType === 'rent' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilterType('rent')}
            >
              For Rent
            </button>
          </div>

          <div className="search-box-prop">
            <input 
              type="text" 
              placeholder="Search by location or title..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Properties Grid */}
        <div className="property-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop) => (
              <div key={prop.id} className="property-card">
                <div className="card-img-box">
                  <span className={`property-tag ${prop.tag === 'For Rent' ? 'rent' : 'sale'}`}>
                    {prop.tag}
                  </span>
                  <img src={prop.image} alt={prop.title} />
                </div>
                
                <div className="card-details">
                  <h3>{prop.title}</h3>
                  <p className="card-location">📍 {prop.location}</p>
                  <h4 className="card-price">{prop.price}</h4>
                  
                  <div className="card-features">
                    {prop.beds > 0 && <span>🛏️ {prop.beds} Beds</span>}
                    {prop.baths > 0 && <span>🛁 {prop.baths} Baths</span>}
                    <span>📐 {prop.area}</span>
                  </div>

                  <button 
                    className="view-details-btn"
                    onClick={() => setSelectedProperty(prop)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No properties found matching your search.</p>
            </div>
          )}
        </div>

      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="modal-overlay" onClick={() => setSelectedProperty(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedProperty(null)}>×</button>
            <h2>{selectedProperty.title}</h2>
            <img src={selectedProperty.image} alt="" style={{width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', margin: '15px 0'}} />
            <p><strong>Location:</strong> {selectedProperty.location}</p>
            <p><strong>Price:</strong> {selectedProperty.price}</p>
            <p><strong>Configuration:</strong> {selectedProperty.beds > 0 ? `${selectedProperty.beds} Beds | ` : ''} {selectedProperty.baths > 0 ? `${selectedProperty.baths} Baths | ` : ''} {selectedProperty.area}</p>
            <button className="contact-owner-btn" onClick={() => alert('Inquiry sent successfully to the owner!')}>
              Contact Owner Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;