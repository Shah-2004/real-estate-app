// import React from 'react';
// import './PropertyTypes.css';

// const PropertyTypes = () => {
//   const categories = [
//     { id: 1, title: 'Apartments', count: '1,240+ Properties', icon: '🏢' },
//     { id: 2, title: 'Luxury Villas', count: '450+ Properties', icon: '🏡' },
//     { id: 3, title: 'Commercial', count: '320+ Properties', icon: '🏬' },
//     { id: 4, title: 'Independent Plots', count: '680+ Properties', icon: '🪨' }
//   ];

//   return (
//     <section className="property-types-section">
//       <div className="property-types-container">
//         <div className="section-header">
//           <h2>Explore Property Types</h2>
//           <p>Find the space that fits your lifestyle and requirements.</p>
//         </div>

//         <div className="types-grid">
//           {categories.map((item) => (
//             <div key={item.id} className="type-card">
//               <div className="type-icon">{item.icon}</div>
//               <h3>{item.title}</h3>
//               <p>{item.count}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PropertyTypes;


import React, { useState } from 'react';
import './PropertyTypes.css';

const PropertyTypes = () => {
  // Track currently selected property type for interactivity
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'apartment', title: 'Apartments', count: '1,240+ Properties', icon: '🏢' },
    { id: 'villa', title: 'Luxury Villas', count: '450+ Properties', icon: '🏡' },
    { id: 'commercial', title: 'Commercial', count: '320+ Properties', icon: '🏬' },
    { id: 'plot', title: 'Independent Plots', count: '680+ Properties', icon: '🪨' }
  ];

  const handleCardClick = (category) => {
    setSelectedCategory(category.id);
    // Yahan aap filter apply kar sakte hain ya properties page par redirect kar sakte hain
    alert(`You selected: ${category.title} (${category.count}). Filtering properties...`);
  };

  return (
    <section className="property-types-section">
      <div className="property-types-container">
        <div className="section-header-property">
          <h2>Explore Property Types</h2>
          <p>Find the space that fits your lifestyle and requirements.</p>
        </div>

        <div className="types-grid">
          {categories.map((item) => {
            const isSelected = selectedCategory === item.id;
            return (
              <div 
                key={item.id} 
                className={`type-card ${isSelected ? 'active-type' : ''}`}
                onClick={() => handleCardClick(item)}
              >
                <div className="type-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.count}</p>
                <span className="explore-hint">{isSelected ? 'Selected ✓' : 'Explore →'}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;