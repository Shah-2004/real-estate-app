// import React from "react";

// import SearchSection from "../components/SearchSection.jsx";
// import FeaturedProperties from "../components/FeaturedProperties.jsx";


// const Home = () => {
//   return (
//     <>
    
//     <section className="hero">
//       <div className="hero-content">
//         <span className="hero-tag">
//           ⭐ India's Trusted Property Platform
//         </span>

//         <h1>Find Your Dream Home</h1>

//         <h2>Without Any Hassle</h2>

//         <p>
//           Buy, Rent and Sell verified properties across India.
//         </p>

//         <div className="hero-buttons">
//           <button className="primary-btn">
//             Explore Properties
//           </button>

//           <button className="secondary-btn">
//             Contact Us
//           </button>
//         </div>
//       </div>

//       <div className="hero-image">
//         <img
//           src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
//           alt="Luxury House"
//         />
//       </div>
//     </section>

//     <SearchSection />
//     <FeaturedProperties />

//     </>
//   );
// };

// export default Home;



import React from "react";

// import SearchSection from "../components/SearchSection.jsx";
import FeaturedProperties from "../components/Home/FeaturedProperties/FeaturedProperties.jsx";
import Hero from "../components/Home/Hero/Hero.jsx";
import PropertyTypes from "../components/Home/PropertyTypes/PropertyTypes.jsx";
import OurAdvantages from "../components/Home/OurAdvantages/OurAdvantages.jsx";
import Testimonials from "../components/Home/Testimonials/Testimonials.jsx";



const Home = () => {
  return (
    <>
    
    <Hero/>
    <FeaturedProperties />
    <PropertyTypes />
    <OurAdvantages />
    <Testimonials />

    </>
  );
};

export default Home;



