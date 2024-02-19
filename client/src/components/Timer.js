import React from "react";
import { useState, useEffect } from "react";
import "./styles/Timer.css";
import registerbtn from "../assets/registerbtn.png";
import SectionHeader from "./SectionHeader";

export default function Timer(props) {
  const targetDate = "2024-02-23:00:00";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div id="timer-section" className="section py-12 px-4 sm:px-12 lg:px-20">
      {/* <SectionHeader color="#f05" heading="BY IIITDM KURNOOL" along="" /> */}
      <div className={`timer ${props.className}`}>
        <h2 data-aos="zoom-out" id="timer-head" className={props.page}>
          See <span>You</span> In
        </h2>
        <ul id="timer" className={props.page + "-timer"}>
          <li className="flex flex-col justify-center items-center">
            <li data-aos="zoom-out" className="timer-box" id="days">
              {timeLeft.days.toString()} <br />
            </li>
            <p className="timer-box-sub">DAYS</p>
          </li>
          <li >
            <li data-aos="zoom-out" className="timer-box" id="hours">
              {timeLeft.hours.toString()} <br />
            </li>
            <p className="timer-box-sub">HOURS</p>
          </li>
          <li>
            <li data-aos="zoom-out" className="timer-box" id="mins">
              {timeLeft.minutes.toString()} <br />
            </li>
            <p className="timer-box-sub">MINS</p>
          </li>
          <li>
            <li data-aos="zoom-out" className="timer-box" id="secs">
              {timeLeft.seconds.toString()} <br />
            </li>
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
