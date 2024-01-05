import React from "react";
// import anahataLogo from "../images/images/footer_logo.png";
import logo from "../assets/clg_logo.png";
import instagram from "../assets/images/social/ig.svg";
import youtube from "../assets/images/social/yt.svg";
import whatsapp from "../assets/images/social/wp.svg";
import callIcon from "../assets/images/social/call.svg";
import mailIcon from "../assets/images/social/mail.svg";
import "./Footer.css"
import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="address">
          <img className="footer-logo" src={logo} alt="Anahata" />
          <p className="college-address">
            Indian Institute of Information Technology Design and Manufacturing, Kurnool, Andhra Pradesh (518008), INDIA
          </p>
        </div>

        <div className="contact">
          <div className="contact-details">
            <p className="contact-header">Contact Us</p>
            {/* <p>Coordinator : </p> */}
            <div className="sm:grid grid-cols-1 gap-3  md:grid-cols-2  xl:grid-cols-3">
              <a className="contact-link" href="tel:7999548368">
                <img className="contact-icon" src={callIcon} alt="" />
                Aditya Pandey
              </a>


            </div>


          </div>
          <div className="social">
            <a href="https://www.instagram.com/iiitk.solasta?igsh=MWExODFwMXhucGxreA==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>


            <a href="https://youtube.com/@iiitksolasta?feature=shared " target="
            _blank" rel="noopener noreferrer">
              <img src={youtube} alt="Youtube" />
            </a>
            <a href="https://wa.me/7999548368" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a href="mailto:solasta@iiitk.ac.in">
              <img src={mailIcon} alt="Email" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-2">
          <p className="">  Copyright ©️ 2024, IIITDMK All rights reserved.</p>
          <p className="flex gap-2">
          <a className="contact-links flex gap-1" href="https://www.linkedin.com/in/sohaibaftab/" target="_blank" rel="noopener noreferrer">
            Designed <Icon icon="mdi:linkedin" style={{color:"#fff", fontSize:"1.5rem"}}/>
          </a>
            and
            <a className="contact-links flex gap-1" href="https://www.linkedin.com/in/harish-choudhary17/" target="_blank" rel="noopener noreferrer">
              Developed <Icon icon="mdi:linkedin" style={{color:"#fff", fontSize:"1.5rem"}}/>
            </a>
            by Web Team Solasta
          </p>


        </div>


      </div>

    </>
  );
}