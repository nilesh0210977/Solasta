import React from "react";
import GridEle from "./GridEle";
import "./styles/grid.css";
import SectionHeader from "./SectionHeader";
import contactbtn from "../assets/contactbtn.png";

function Grid() {
  return (
    <div id="grid-section" className="section py-16 px-4 sm:px-12 lg:px-24">
      <SectionHeader
        color="#D5CBFE"
        heading="10 Reasons to Sponsor"
        along="SOLASTA"
      />
      <div className="grid">
        <GridEle classname="a" />
        <GridEle classname="b" />x
        <GridEle classname="c" />
        <GridEle classname="d" />
        <GridEle classname="e" />
        <GridEle classname="f" />
        <GridEle classname="g" />
        <GridEle classname="h" />
        <GridEle classname="i" />
      </div>
      <div className="img-btn">
        <img draggable={false} src={contactbtn} alt="Button" />
      </div>
    </div>
  );
}

export default Grid;
