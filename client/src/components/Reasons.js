import React from 'react';
import Styles from "./Reason.module.scss";
import SectionHeader from './SectionHeader';
import { useNavigate } from "react-router-dom";

import contactbtn from "../assets/contactbtn.png";
import data from "../constants/sponsor";

const ServiceCard = ({ img, data }) => {
  return (
    <div className={Styles.card}>
      <div className={Styles["card-inner"]}>
        <div className={Styles["card-front"]}>
          <img src={img} alt="Service image" />
        </div>
        <div className={Styles["card-back"]}>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};

const Reason = () => {
  const navigate = useNavigate();

  return (
    <section id="grid-section" className={Styles['service-section']}>
      <SectionHeader
        color="#ff6f00"
        heading="Reasons to Sponsor"
        along="SOLASTA"
      />
      <div className={Styles['service-container']}>
        {data.map((service, i) => <ServiceCard key={i} {...service} />)}
      </div>

      <div className={Styles["img-btn"]}>
        <button
          className={Styles["styled-contact-button"]}
          onClick={() => navigate("/teams")}
        >
          Contact Sponsor Team
        </button>
      </div>
    </section>
  );
};

export default Reason;
