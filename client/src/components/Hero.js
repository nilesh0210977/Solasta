import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_large.png"
import udghosh from "../assets/udghosh.png";



export default function Hero() {

  const styles = {
    // position: 'absolute',
    // bottom: "50%",
    // right: 0,
    // transform: 'translate(45%,0) rotate(-90deg)',
    letterSpacing: "0.5rem",
    // display:'none'
  }


  return (
    <div className="hero-section" id="Home">
      <img src={logo} alt="" className=" max-w-[50%] sm:max-w-[40%] md:max-w-[30%] lg:max-w-[22%]" />
      <p className="text-[1.3rem] text-white font-bold text-center" style={styles}>IIITDM KURNOOL Presents</p>
      <h1 className="hero-head">Solasta'24</h1>
      <img src={udghosh} className="max-w-[40%] lg:max-w-[20%]" alt="logo-img" />
      <button className="absolute bottom-0 lg:top-8 lg:bottom-auto lg:right-8 w-fit-content text-white">
      <Link to = "/register"
        className="quick-link"
      >
        Register Now
      </Link></button>
    </div>
  );
}
