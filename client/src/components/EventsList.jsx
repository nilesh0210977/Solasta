import React from "react";
import titlebar from "../assets/cardTitle1.png";
import "./styles/EventsList.css";
import Card from "./Card";
import i1 from "../assets/1.png";
import i2 from "../assets/2.png";
import i3 from "../assets/3.png";

const EventsList = () => {
  return (
    <div className="event-list">
      <Card image={i1} title="1" />
      <Card image={i2} title="1" />
      <Card image={i3} title="1" />
      <Card image={i1} title="1" />
      <Card image={i2} title="1" />
      <Card image={i3} title="1" />
      <Card image={i1} title="1" />
      <Card image={i2} title="1" />
      <Card image={i3} title="1" />
    </div>
  );
};

export default EventsList;
