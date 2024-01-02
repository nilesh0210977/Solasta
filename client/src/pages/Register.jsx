import React, { useState } from "react";
import registerHero from "../assets/register6.jpg";
import Footer from "../components/Footer";
import "../components/styles/Ticket.css";

export default function Register() {
  const ins1 = `Solasta Pass charge for outside IIITDM Kurnool Students: ₹1000

  Benefits of this pass:
  1.	Access to attend all events
  2.	Access to participate in all cultural and non-technical events
  3.	Access to attend Pronites (Celebrity Night, Rock Night, Fashion Show, DJ Night)

  Charges for Participating in technical events (Outside IIITDM Kurnool Students):
  1.	Hackathon- ₹100
  2.	Coding Challenge- ₹50
  3.	Design Quest- ₹75
  4.	Drone Race- ₹100
  5.	RC Car Racing on rally track- ₹75
  6.	Micro-maze- ₹75
  `;

  const ins2 = `Solasta Pass for IIITDM Kurnool Students: Solasta’24 Official Merch (T-shirt) is compulsory for attending the events in Solasta.
 
  Benefits of this pass:
  1.	Access to attend all events
  2.	Access to participate in all events
  3.	Access to attend Pronites (Celebrity Night, Rock Night,Fashion Show, DJ Night)
`;

  const [btnTxt, setBtnTxt] = useState("Next");
  const [boxTxt, setBoxTxt] = useState(ins1);
  const [status, setStatus] = useState(true);

  const next = () => {
    if (btnTxt === "Next") {
      setBoxTxt(ins2);
      setBtnTxt("Back");
      setStatus(false);
    } else {
      setStatus(true);
      setBoxTxt(ins1);
      setBtnTxt("Next");
    }
  };
  return (
    <>
      <div className="register-section">
        <img className="hero-background-sign" src={registerHero} alt="" />
        <div className="below-register">
          <p className="register-head">BUY NOW AND GET 50% OFF!</p>
          <div className="register-form">
            <p style={{ whiteSpace: "pre-line" }}>{boxTxt}</p>
            <button hidden={status} className="submit-btn">
              <a href="https://docs.google.com/forms/d/1tgIcYlUCVZeurZKUqUPkGZYtqCGTagggux7wC5AJB8c/">
                Buy Now
              </a>
            </button>
            <button onClick={next} className="submit-btn">
              {btnTxt}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
