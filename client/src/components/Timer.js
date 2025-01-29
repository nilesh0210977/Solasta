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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [previousTime, setPreviousTime] = useState(timeLeft);
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

  useEffect(() => {
    // Trigger flip animation when the timer changes (only for changed time part)
    const changedTime = {};

    if (timeLeft.days !== previousTime.days) changedTime.days = true;
    if (timeLeft.hours !== previousTime.hours) changedTime.hours = true;
    if (timeLeft.minutes !== previousTime.minutes) changedTime.minutes = true;
    if (timeLeft.seconds !== previousTime.seconds) changedTime.seconds = true;

    // Update previousTime to current time
    setPreviousTime(timeLeft);

    // Now apply flip animation only to the changed timer part
    Object.keys(changedTime).forEach((timePart) => {
      const flipElement = document.querySelector(`#${timePart} .flip`);
      if (flipElement) {
        flipElement.classList.add("flipping");
        setTimeout(() => {
          flipElement.classList.remove("flipping");
        }, 1000); // Remove the flipping class after animation
      }
    });
  }, [timeLeft]); // Trigger when timeLeft changes

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
          <li className="flex flex-col justify-center items-center" id="days">
            <div className="timer-box">
              <div className="flip">{timeLeft.days}</div>
            </div>
            <p className="timer-box-sub">DAYS</p>
          </li>
          <li id="hours">
            <div className="timer-box">
              <div className="flip">{timeLeft.hours}</div>
            </div>
            <p className="timer-box-sub">HOURS</p>
          </li>
          <li id="mins">
            <div className="timer-box">
              <div className="flip">{timeLeft.minutes}</div>
            </div>
            <p className="timer-box-sub">MINS</p>
          </li>
          <li id="secs">
            <div className="timer-box">
              <div className="flip">{timeLeft.seconds}</div>
            </div>
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
