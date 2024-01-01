import React from "react";
import logo from "../assets/logo_large.png"
import udghosh from "../assets/udghosh.png";



export default function Hero() {

  const styles = {
    position: 'absolute',
    bottom: "50%",
    right: 0,
    transform: 'translate(45%,0) rotate(-90deg)',
    letterSpacing: "1rem",
    // display:'none'
  }


  return (
    <div className="hero-section" id="Home">
      <img src={logo} alt="" className=" max-w-[50%] sm:max-w-[40%] md:max-w-[30%] lg:max-w-[22%]" />
      <h1 className="hero-head">Solasta'24</h1>
      <img src={udghosh} className="max-w-[40%] lg:max-w-[20%]" alt="logo-img" />
      <p className="text-[1.3rem] text-white font-light hidden md:block" style={styles}>IIITDM KURNOOL</p>
      <button className="absolute bottom-0 lg:top-8 lg:bottom-auto lg:right-8 w-fit-content text-white">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSda--XmXb30n94VlHDZtgPvoEo5DCvFi6k7qUgs9SJTQ5p-8w/formrestricted"
        className="quick-link"
      >
        Register Now
      </a></button>
    </div>
  );
}
