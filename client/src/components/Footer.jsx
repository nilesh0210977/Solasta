import React from "react";
import logo from "../assets/footerlogo.png";
import instagram from "../assets/images/social/ig.svg";
import youtube from "../assets/images/social/yt.svg";
import whatsapp from "../assets/images/social/wp.svg";
import callIcon from "../assets/images/social/call.svg";
import mailIcon from "../assets/images/social/mail.svg";
import { Icon } from "@iconify/react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div id="footer" className="main-footer">
        <div className="address-section">
          <div className="logo-container">
            <img className="footer-logo pulse-animation" src={logo} alt="Anahata" />
          </div>
          <p className="college-address">
            Indian Institute of Information Technology Design and Manufacturing, 
            Kurnool, Andhra Pradesh (518008), INDIA
          </p>
        </div>
        
        <div className="contact-section">
          <div className="contact-details">
            <h3 className="contact-header">Connect With Us</h3>
            <div className="contact-grid">
              <a className="contact-link hover-effect" href="tel:9908267729">
                <img className="contact-icon" src={callIcon} alt="Call" />
                <span>Pavan Sai</span>
              </a>
            </div>
          </div>
          
          <div className="social-links">
            <a className="social-icon-wrapper" href="https://www.instagram.com/iiitk.solasta?igsh=MWExODFwMXhucGxreA==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a className="social-icon-wrapper" href="https://youtube.com/@iiitksolasta?feature=shared" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="Youtube" className="social-icon" />
            </a>
            <a className="social-icon-wrapper" href="https://wa.me/+919908267729" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="Whatsapp" className="social-icon" />
            </a>
            <a className="social-icon-wrapper" href="mailto:solasta@iiitk.ac.in">
              <img src={mailIcon} alt="Email" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="copyright-section">
        <div className="copyright-content">
          <p className="copyright-text">Copyright ©️ 2025, IIITDMK All rights reserved.</p>
          <div className="developer-credits">
            <span>
              <a className="team-link" href="https://www.linkedin.com/in/sohaibaftab/" target="_blank" rel="noopener noreferrer">
                Designed <Icon icon="mdi:linkedin" className="linkedin-icon" />
              </a>
              {" and "}
              <a className="team-link" href="https://www.linkedin.com/in/jvkousthub/" target="_blank" rel="noopener noreferrer">
                Developed <Icon icon="mdi:linkedin" className="linkedin-icon" />
              </a>
              <a className="team-link" href="https://www.linkedin.com/in/anjani-kumar-s/" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:linkedin" className="linkedin-icon" />
              </a>
              {" by Web Team Solasta"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}