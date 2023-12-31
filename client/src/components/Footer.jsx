import React from "react";
import "./Footer.css";
// import anahataLogo from "../assets/images/footer_logo.png";
// import instagram from "../assets/images/social/ig.svg";
// import youtube from "../assets/images/social/yt.svg";
// import whatsapp from "../assets/images/social/wp.svg";
// import callIcon from "../assets/images/social/call.svg";
// import mailIcon from "../assets/images/social/mail.svg";

export default function Footer() {
  return (
    <>
      <div id="footer" className="">
        <div className="address">
          {/* <img className="footer-logo" src={anahataLogo} alt="Anahata" /> */}
          <p className="college-address">
            All India Institute of Medical Sciences (AIIMS), Kunraghat,
            Gorakhpur, Uttar Pradesh (273008), INDIA
          </p>
        </div>
        <div className="quick-links">
          <p className="quick-link-header">Quick Links</p>
          <a
            href="https://docs.google.com/forms/d/1tgIcYlUCVZeurZKUqUPkGZYtqCGTagggux7wC5AJB8c/edit"
            className="quick-link"
          >
            Basic Registration Form
          </a>
          <br />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScA3J5v5EPfFNgjJ1ONTsrDEMMC0eiOkf_Yr6LLUfo6w1R3aQ/viewform"
            className="quick-link"
          >
            Accommodation Form
          </a>
          <br />
          <a href="https://forms.gle/sobBYpRUMe8iLEfA7" className="quick-link">
            Delegate Card Form
          </a>
          <br />
        </div>
        <div className="contact">
          <div className="contact-details">
            <p className="contact-header">Contact Us</p>
            <p>Coordinators : </p>
            <a className="contact-link" href="tel:82908 44112">
              {/* <img className="contact-icon" src={callIcon} alt="" /> */}
              Kishan Singh
            </a>
            <br />
            <a className="contact-link" href="tel:89057 09146">
              {/* <img className="contact-icon" src={callIcon} alt="" /> */}
              Ankit Dubey
            </a>
            <br />
            <a className="contact-link">
              {/* <img className="contact-icon" src={callIcon} alt="" /> */}
              Laxmi Gupta
            </a>
            <br />
            <a className="contact-link">
              {/* <img className="contact-icon" src={callIcon} alt="" /> */}
              Pallavi
            </a>
            <br />
            <a className="contact-link" href="tel:83960 25007">
              {/* <img className="contact-icon" src={callIcon} alt="" /> */}
              Siddharth Sangwan
            </a>
            <br />
          </div>
          <div className="social">
            <a href="https://instagram.com/anahata_aiims?igshid=MzRlODBiNWFlZA==">
              {/* <img src={instagram} alt="Instagram" /> */}
            </a>
            <a href="https://www.youtube.com/@anahata_aiims">
              {/* <img src={youtube} alt="Youtube" /> */}
            </a>
            <a href="https://wa.me/8290844112">
              {/* <img src={whatsapp} alt="Whatsapp" /> */}
            </a>
            <a href="mailto:anahata.aiimsgorakhpur@gmail.com">
              {/* <img src={mailIcon} alt="Email" /> */}
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023, ANAHATA. All rights reserved | Designed and Developed
        by <a href="https://www.linkedin.com/in/sohaibaftab/">Sohaib Aftab</a>
      </div>
    </>
  );
}
