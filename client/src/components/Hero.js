import React from "react";
import logo from "../assets/logo_large.png"



export default function Hero() {

  const styles = {
    position : 'absolute',
    bottom:"50%",
    right:0,
    transform:'translate(40%,0) rotate(-90deg)',


  }


  return (
    <div className="hero-section" id="Home">
      <img src={logo} alt="" className="max-w-[50%] md:max-w-[25%] lg:max-w-[22%]" />
      <h1 className="hero-head">Solasta</h1>
      <p className="text-[2rem] text-white" style={styles}>IIITDM-Kurnool</p>
    </div>
  );
}
