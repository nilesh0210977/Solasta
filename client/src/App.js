import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Teams from "./pages/Teams";
import EventDetails from "./pages/EventDetails";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import "./App.css";
import "./components/GoToTopButton"
import GoToTopButton from "./components/GoToTopButton";


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onAnimationEnd={handleSplashEnd} />
      ) : (
        <>
          
          <Navbar />

          {}
          <Routes className="main">
            <Route index path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1>NO PAGES FOUND</h1>} />
          </Routes>

          <GoToTopButton/>
          {}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
