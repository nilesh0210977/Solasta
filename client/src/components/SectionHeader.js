import React from "react";

const SectionHeader = ({ color, heading, along }) => {
  return (
    <div className="section-title">
      <div>
        <div className="shape1" style={{ backgroundColor: color }}></div>
      </div>
      <div className="heading">
        {heading} <span style={{ color: color }}>{along}</span>
      </div>
      <div>
        <div className="shapes">
          <div className="shape2" style={{ backgroundColor: color }}></div>
          <div className="shape3" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  );
};
export default SectionHeader;
