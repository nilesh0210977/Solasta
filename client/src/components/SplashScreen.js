import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import logo from "../assets/logo_large.png"; 
import './SplashScreen.css';

const SplashScreen = ({ onAnimationEnd }) => {
  const [isSplashDone, setIsSplashDone] = useState(false);
  const props = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.5)" },
    onRest: () => setIsSplashDone(true),
    config: { tension: 150, friction: 25 },
  });

  useEffect(() => {
    if (isSplashDone) {
      const timer = setTimeout(() => {
        onAnimationEnd(); 
      }, 400); 

      return () => clearTimeout(timer);
    }
  }, [isSplashDone, onAnimationEnd]);

  return (
    <div className="splash-screen">
      {}
      <div className="background" />

      {}
      <div className="overlay" />

      <animated.div className="logo-container" style={props}>
        <animated.img
          src={logo}
          alt="Solasta Logo"
          className="logo"
          style={props}
        />
      </animated.div>
    </div>
  );
};

export default SplashScreen;
