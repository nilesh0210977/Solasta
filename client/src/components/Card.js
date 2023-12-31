import React from "react";
import "./styles/card.css";
import titlebar from "../assets/cardTitle1.png";

function Card({ image, title }) {
  return (
    <div className="card">
      <div className="pic">
        <img draggable={false} src={image} alt={`${title}.png`} />
      </div>
      <div className="titleContainer">
      <div className="titleCat">{title}</div>
      <img draggable={false} className="titleBar" src={titlebar} alt="." />
      </div>
    
    </div>
  );
}

export default Card;
