import React from "react";
import logo from "../assets/logo_large.png";
import "./styles/AboutUsDetails.css"; // Create a separate CSS file for styling

const AboutUsDetails = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-20">
      <div className="left flex justify-center items-center">
        <img className="resp-img max-w-[50%] md:max-w-full" src={logo} alt="logo" />
      </div>
      <div className="vertical-line"></div>
      <div className="right flex flex-col justify-between items-start gap-8">
        <p className="aboutpara">
          SOLASTA is the annual Techno-cultural festival of IIITDM Kurnool.
          Started in 2019, it is now the biggest event of its kind in not only
          the Kurnool city but also the greater Rayalaseema region. It
          attracts an annual footfall of over 10,000 from more than 50
          colleges across the region and has prize money worth over 250k. 
        </p>
        <p className="aboutpara">
        It
          offers budding talents the opportunity to interact, enhance and
          demonstrate their creativity and talent.
          IIITDM Kurnool strives to
          spread the message of art amongst the youth and doing everything to
          ensure the glorious future for art.
        </p>
        <a class="fancy" href="#" >
          <span class="top-key"></span>
          <span class="text">Download Brochure</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
      </div>
      <div>

      </div>
    </div>
  );
};

export default AboutUsDetails;
