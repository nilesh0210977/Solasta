import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./styles/faq.css";
import SectionHeader from "./SectionHeader";

function Faq() {
  const [faqData, setFaqData] = useState([
    {
      question: "Lorem ipsum dolor sit amet consectetur, adipisicing elite ?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate dicta rerum molestias animi distinctio quia sunt perspiciatis? Saepe ab consequatur itaque inventore asperiores quis tenetur placeat fugiat tempore laborum!",
      isOpen: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur, adipisicing elite ?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate dicta rerum molestias animi distinctio quia sunt perspiciatis? Saepe ab consequatur itaque inventore asperiores quis tenetur placeat fugiat tempore laborum!",
      isOpen: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur, adipisicing elite ?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate dicta rerum molestias animi distinctio quia sunt perspiciatis? Saepe ab consequatur itaque inventore asperiores quis tenetur placeat fugiat tempore laborum!",
      isOpen: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur, adipisicing elite ?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate dicta rerum molestias animi distinctio quia sunt perspiciatis? Saepe ab consequatur itaque inventore asperiores quis tenetur placeat fugiat tempore laborum!",
      isOpen: false,
    },
    // Add more FAQ sections as needed
  ]);

  const toggleFaq = (index) => {
    let newFaqData = [...faqData];
    newFaqData[index].isOpen = !newFaqData[index].isOpen;
    setTimeout(() => {
      setFaqData(newFaqData);
    }, 500);
  };

  return (
    <div className="faq-main py-12 px-4 sm:px-12 lg:px-24">
      <SectionHeader heading="FAQs" along="" color="#D5CBFE" />
      {faqData.map((faq, index) => (
        <div className="faq-sec" key={index} onClick={() => toggleFaq(index)}>
          <div className="first-div">
            <div className="second-div">
              <div className="child-1">{faq.question}</div>
              <div className={`child-2 ${faq.isOpen ? "visible" : ""}`}>
                {faq.answer}
              </div>
            </div>
            <div className="toggle-button">
              {faq.isOpen ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
