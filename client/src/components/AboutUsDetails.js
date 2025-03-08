import React from "react";
import logo from "../assets/solastalogo.png";
import "./styles/AboutUsDetails.css"; 


import pdf from "../assets/brochure_final.pdf";

const AboutUsDetails = () => {
  return (
    <div className="flex  items-center justify-center flex-col lg:flex-row  gap-4 md:gap-8 mt-20">
      <div className="left justify-center items-center">
        <img className="resp-img max-w-[50%] mx-auto lg:max-w-[90%]" src={logo} alt="logo" />
      </div>
      <div className="vertical-line"></div>
      <div className="right  flex flex-col gap-8">
        <p className="aboutpara">
          The Indian Institute of Information Technology, Design & Manufacturing, Kurnool (IIITDM Kurnool) was established in 2014 following the President of India's approval of the Institutes of Information Technology Act, 2014. Fully funded by the Ministry of Education, this prestigious institution was elevated to the status of an Institute of National Importance on August 3, 2017, through a significant amendment to the IIIT Act. IIITDM Kurnool is a beacon of academic excellence, innovation, and transformative education.
          </p>
        <p className="aboutpara">

        SOLASTA, the flagship Techno-Cultural extravaganza of IIITDM Kurnool, has been a cornerstone of the institute's legacy since its inception in 2019. Recognized as the grandest festival of its kind not only in Kurnool city but across the greater Rayalaseema region, SOLASTA has become a vibrant platform that celebrates talent, creativity, and innovation. With an astounding annual footfall exceeding 10,000 attendees from over 50 prestigious colleges in the region, the event showcases thrilling competitions, artistic brilliance, and technological marvels, offering a staggering prize pool worth over ₹2,50,000.
        </p>
        <p className="aboutpara">

        SOLASTA provides aspiring talents with a unique opportunity to connect, collaborate, and showcase their potential. Through this cultural spectacle, IIITDM Kurnool passionately advocates for the growth of artistic and technological pursuits among the youth, ensuring a brighter and more glorious future for art and innovation.
        </p>


        <a class="fancy" href={pdf}  download="Solasta'25_Brochure_IIITK">
          <span class="top-key"></span>
          <p className="text" >Download Brochure</p>
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
