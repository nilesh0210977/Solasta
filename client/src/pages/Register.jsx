import React, { useState } from "react";
import registerHero from "../assets/EventsBanner.jpeg";
import "../components/styles/Ticket.css";

export default function Register() {
  const [role, setRole] = useState(null);

  const studentPass = `Solasta Pass for IIITDM Kurnool Students (FREE)
  
  Benefits of this pass:
  1. Access to attend all events
  2. Access to participate in all events
  3. Access to attend Pronites (Celebrity Night, Rock Night, Fashion Show, DJ Night)
  4. Solasta’24 Official Merch (T-shirt) is compulsory for attending the events.
  `;

  const outsider300 = `Solasta Pass - ₹300
  
  Benefits of this pass:
  1. Access to view all events
  2. Access to participate in any two events
  3. Access to attend Pronites (Celebrity Night, Rock Night, Fashion Show, DJ Night)
  `;

  const outsider500 = `Solasta Pass - ₹500
  
  Benefits of this pass:
  1. Access to view all events
  2. Access to participate in all events
  3. Access to attend Pronites (Celebrity Night, Rock Night, Fashion Show, DJ Night)
  `;

  const studentFormLink = "https://docs.google.com/forms/d/e/1FAIpQLScdnw0MH7zAqG3VgkSg2xsH8DZ4khwWFnD-6z8yEpYHSvPGGA/viewform";
  const outsiderFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSftHbHsrca02Wt1N5GzdXV-BTuEM9HpBqG4djPVwOvl-_6SPA/viewform";

  return (
    <div className="RegisterPage">
      <div className="register-section">
        <img className="hero-background-sign" src={registerHero} alt="" />
        <div className="below-register flex flex-col gap-8">
          <p className="register-head">
            EARLY BIRD REGISTRATION - BUY NOW AND GET 50% OFF!
          </p>

          {/* Role Selection */}
          {!role && (
            <div className="role-selection">\
              <button className="submit-btn" onClick={() => setRole("student")}>Student</button>
              <button className="submit-btn" onClick={() => setRole("outsider")}>Outsider</button>
            </div>
          )}

          {/* Student Registration */}
          {role === "student" && (
            <div className="register-form">
              <p style={{ whiteSpace: "pre-line" }}>{studentPass}</p>
              <button className="submit-btn">
                <a href={studentFormLink} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </button>
            </div>
          )}

          {/* Outsider Registration */}
          {role === "outsider" && (
            <>
              <div className="register-form">
                <p style={{ whiteSpace: "pre-line" }}>{outsider300}</p>
                <button className="submit-btn">
                  <a href={outsiderFormLink} target="_blank" rel="noopener noreferrer">
                    Register for ₹300
                  </a>
                </button>
              </div>

              <div className="register-form">
                <p style={{ whiteSpace: "pre-line" }}>{outsider500}</p>
                <button className="submit-btn">
                  <a href={outsiderFormLink} target="_blank" rel="noopener noreferrer">
                    Register for ₹500
                  </a>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
