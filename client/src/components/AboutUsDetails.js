import React from "react";
import logo from "../assets/logo_large.png";
import "./styles/AboutUsDetails.css"; // Create a separate CSS file for styling

const AboutUsDetails = () => {
  return (
    <div className="flex  items-center justify-center flex-col lg:flex-row  gap-4 md:gap-8 mt-20">
      <div className="left justify-center items-center">
        <img className="resp-img max-w-[50%] mx-auto lg:max-w-[90%]" src={logo} alt="logo" />
      </div>
      <div className="vertical-line"></div>
      <div className="right  flex flex-col gap-8">
        <p className="aboutpara">
          The Indian Institute of Information Technology, Design & Manufacturing, Kurnool (IIITDMK)  was announced in 2014 after receiving the assent of President of India to the Institutes  of Information Technology Act, 2014. Fully funded by Ministry of Education. IIITDM Kurnool was accorded the status of Institute of National Importance by making an amendment in the IIIT act 2014 on August 03, 2017. 
          </p>
        <p className="aboutpara">

          SOLASTA is the annual Techno-cultural festival of IIITDM Kurnool. Started in 2019, it is now the biggest event of its kind in not only the Kurnool city but also the greater Rayalaseema region. It attracts an annual footfall of over 10,000 from more than 50 colleges across the region and has prize money worth over 300k. It offers budding talents the opportunity to interact, enhance and demonstrate their creativity and talent. IIITDM Kurnool strives to spread the message of art amongst the youth and doing everything to ensure the glorious
          future for art.
        </p>

        <a class="fancy" href="/" >
          <span class="top-key"></span>
          <a href="../assets/brochure_final.pdf" download="Solasta'24_Brochure_IIITK" className="text" >Download Brochure</a>
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
