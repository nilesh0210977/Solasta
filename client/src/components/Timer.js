import React, { useState, useEffect } from "react";
import "./styles/Timer.css";
import registerbtn from "../assets/registerbtn.png";
import SectionHeader from "./SectionHeader";

export default function Timer(props) {
  const targetDate = "2025-02-21:00:00";

  // Declare calculateTimeLeft before using it
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Use the function after it's declared
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [startRolling, setStartRolling] = useState(false);

  useEffect(() => {
    // Calculate time left every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // IntersectionObserver to trigger animation when the timer comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartRolling(true);
          } else {
            setStartRolling(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the timer is visible
    );

    const timerSection = document.getElementById("timer-section");
    observer.observe(timerSection);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="timer-section"
      className={`section py-12 px-4 sm:px-12 lg:px-20 ${startRolling ? "start-rolling" : ""}`}
    >
      <div className={`timer ${props.className}`}>
        <h2 data-aos="zoom-out" id="timer-head" className={props.page}>
          See <span>You</span> In
        </h2>
        <ul id="timer" className={`${props.page}-timer`}>
          <li className="flex flex-col justify-center items-center">
            <div className="timer-box" id="days">{timeLeft.days}</div>
            <p className="timer-box-sub">DAYS</p>
          </li>
          <li>
            <div className="timer-box" id="hours">{timeLeft.hours}</div>
            <p className="timer-box-sub">HOURS</p>
          </li>
          <li>
            <div className="timer-box" id="mins">{timeLeft.minutes}</div>
            <p className="timer-box-sub">MINS</p>
          </li>
          <li>
            <div className="timer-box" id="secs">{timeLeft.seconds}</div>
            <p className="timer-box-sub">SECS</p>
          </li>
        </ul>
      </div>
      <div className="img-btn register-btn">
        <img draggable={false} src={registerbtn} alt="Button" />
      </div>
    </div>
  );
}
