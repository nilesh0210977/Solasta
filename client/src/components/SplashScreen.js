import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import logo from "../assets/solastalogo.png"; 
import './SplashScreen.css';

const languages = [
"Solasta '25",

"సోలస్తా '25" ,// Telugu

"सोलस्ता '25", // Hindi

"ಸೋಲಸ್ತಾ '25" ,// Kannada

"சோலஸ்டா '25" ,// Tamil

"સોલસ્તા '25", // Gujarati

"सोलस्ता '25", // Marathi

"സോലസ്താ '25", // Malayalam

"সলস্তা '25", // Bengali

"ସୋଲସ୍ତା '25", // Odia

"ਸੋਲਸਤ੍ਰਾ '25", // Punjabi (Gurmukhi script)

"સોલસ્તા '25" // Gujarati (Latin script)
   
];

const SplashScreen = ({ onAnimationEnd }) => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isSplashDone, setIsSplashDone] = useState(false);

  const props = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.5)" },
    onRest: () => setIsSplashDone(true),
    config: { tension: 150, friction: 25 },
  });

  useEffect(() => {
    const languageInterval = setInterval(() => {
      setCurrentLanguage(prev => (prev + 1) % languages.length);
    }, 80);

    if (isSplashDone) {
      const timer = setTimeout(() => {
        clearInterval(languageInterval);
        onAnimationEnd();
      }, 1200);
      return () => clearTimeout(timer);
    }

    return () => clearInterval(languageInterval);
  }, [isSplashDone, onAnimationEnd]);

  return (
    <div className="splash-screen">
      <div className="background" />
      <div className="overlay" />
      <animated.div className="logo-container" style={props}>
        <animated.img
          src={logo}
          alt="Solasta Logo"
          className="logo"
          style={props}
        />
        <div className="language-text">{languages[currentLanguage]}</div>
      </animated.div>
    </div>
  );
};

export default SplashScreen;
