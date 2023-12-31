import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles/card.css";
import titlebar from "../assets/cardTitle1.png";


function Card({ image, title , category}) {

  const navigate = useNavigate();


  return (
    <div className="card">
      <div className="pic">
        <img draggable={false} src={image} alt={`${title}.png`} />
      </div>
      <div className="titleContainer" onClick={() => navigate('/events',{state:category})}>
      <div className="titleCat">{title}</div>
      <img draggable={false} className="titleBar" src={titlebar} alt="." />
      </div>
    
    </div>
  );
}

export default Card;
