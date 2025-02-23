import React, { useState, useEffect } from "react";
import "./styles/Timer.css";
import SectionHeader from "./SectionHeader";

export default function Timer(props) {
  const targetDate = "2025-03-17:00:00";

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
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

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
      { threshold: 0.5 }
    );

    const timerSection = document.getElementById("timer-section");
    observer.observe(timerSection);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const changedTime = {};

    if (timeLeft.days !== previousTime.days) changedTime.days = true;
    if (timeLeft.hours !== previousTime.hours) changedTime.hours = true;
    if (timeLeft.minutes !== previousTime.minutes) changedTime.minutes = true;
    if (timeLeft.seconds !== previousTime.seconds) changedTime.seconds = true;

    setPreviousTime(timeLeft);

    Object.keys(changedTime).forEach((timePart) => {
      const flipElement = document.querySelector(`#${timePart} .flip`);
      if (flipElement) {
        flipElement.classList.add("flipping");
        setTimeout(() => {
          flipElement.classList.remove("flipping");
        }, 1000);
      }
    });
  }, [timeLeft]);

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
      <div className="register-btn">
        <button className="styled-register-button">
          Register Now
        </button>
      </div>
    </div>
  );
}
