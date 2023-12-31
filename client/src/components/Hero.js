import React from "react";
import logo from "../assets/logo_large.png"

export default function Hero() {
  return (
    <div className="hero-section" id="Home">
      <img src={logo} alt="" className="max-w-[50%] md:max-w-[25%] lg:max-w-[22%]" />
      <h1 className="hero-head">Solasta</h1>
    </div>
  );
}
