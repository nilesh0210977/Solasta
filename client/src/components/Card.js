import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/card.css";
import titlebar from "../assets/cardTitle1.png";

function Card({ image, title, category, description }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img draggable={false} src={image} alt={`${title}.png`} />
        </div>
        <div className="card-back">
          <div className="titleContainer" onClick={() => navigate('/events', { state: category })}>
            <div className="titleCat">{title}</div>
            <img draggable={false} className="titleBar" src={titlebar} alt="." />
          </div>
          <p className="card-description">{description}</p>
          <div className="buttonContainer">
            <button
              onClick={() => navigate('/events')}
              className="navigateButton"
            >
              Participate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
