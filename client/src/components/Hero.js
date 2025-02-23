import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/solastalogo.png";
import udghosh from "../assets/udghosh.png";

export default function Hero() {
  const styles = {
    letterSpacing: "0.5rem",
  };

  return (
    <div className="hero-section" id="Home">
      <img
        src={logo}
        alt="Solasta Logo"
        className="max-w-[30%] sm:max-w-[25%] md:max-w-[20%] lg:max-w-[15%] mb-8" 
      />
      <p
        className="text-[1.7rem] text-white font-bold text-center"
        style={styles}
      >
        IIITDM KURNOOL Present
      </p>
      <h1 className="hero-head">Solasta'25</h1>
      <img
        src={udghosh}
        className="max-w-[40%] lg:max-w-[20%]"
        alt="Udghosh Logo"
      />
      <button className="register-now-button absolute bottom-0 lg:top-8 lg:bottom-auto lg:right-8 w-fit-content">
        <Link to="/register" className="quick-link">
          Register Now
        </Link>
      </button>
    </div>
  );
}