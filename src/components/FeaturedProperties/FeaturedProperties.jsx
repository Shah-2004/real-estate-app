import React from 'react';
import './FeaturedProperties.css'

const properties = [
  {
    id: 1,
    title: 'Luxury Villa',
    location: '📍 Jaipur, Rajasthan',
    price: '₹85,00,000',
    type: 'For Sale',
    beds: '4 Beds',
    baths: '3 Baths',
    sqft: '2400 sqft',
    image: '/src/assets/images/img3.jpg',
  },
  {
    id: 2,
    title: 'Modern Apartment',
    location: '📍 Delhi',
    price: '₹25,000 / Month',
    type: 'For Rent',
    beds: '2 Beds',
    baths: '2 Baths',
    sqft: '1200 sqft',
    image: '/src/assets/images/img2.jpg',
  },
  {
    id: 3,
    title: 'Family House',
    location: '📍 Mumbai',
    price: '₹1,20,00,000',
    type: 'For Sale',
    beds: '5 Beds',
    baths: '4 Baths',
    sqft: '3100 sqft',
    image: '/src/assets/images/img1.jpg',
  },
];

const FeaturedProperties = () => {
  return (
    <section className="featured-properties">
      <div className="section-title">
        <h2>Featured Properties</h2>
        <p>Explore our hand-picked premium properties.</p>
      </div>

      <div className="property-container">
        {properties.map((item) => (
          <div key={item.id} className="property-card">
            <div className="property-image">
              <img src={item.image} alt={item.title} />
              <span className={`property-tag ${item.type === 'For Rent' ? 'rent' : 'sale'}`}>
                {item.type}
              </span>
            </div>

            <div className="property-details">
              <h3>{item.title}</h3>
              <p className="location">{item.location}</p>
              <h4 className="price">{item.price}</h4>

              <div className="property-info">
                <span>🛏 {item.beds}</span>
                <span>🛁 {item.baths}</span>
                <span>📐 {item.sqft}</span>
              </div>

              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;