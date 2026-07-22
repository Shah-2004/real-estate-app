// import AnnouncementBar from "./components/announcementBar/AnnouncementBar";
// import Navbar from "./components/Navbar/Navbar";
// import SearchSection from "./components/searchSection/SearchSection";

import React from "react";
import { Routes, Route } from "react-router-dom";

import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Hero from "./pages/Hero.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./components/Login/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Properties from "./pages/Properties.jsx";



function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      {/* <Hero /> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* <SearchSection /> */}
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>

    </>
  );
}

export default App;