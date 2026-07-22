import React from "react";
import { Routes, Route } from "react-router-dom";

import AnnouncementBar from "./components/Home/AnnouncementBar/AnnouncementBar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./components/Login/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Properties from "./pages/Properties.jsx";
import Footer from "./components/Footer/Footer.jsx";



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

          <Footer />
    </>
  );
}

export default App;