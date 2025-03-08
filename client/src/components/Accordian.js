import React, { useState } from 'react';
import PropTypes from "prop-types";
import Styles from "./Accordian.module.scss";
import { Icon } from '@iconify/react';


const AccordionItem = ({ question, answer, index, activeIndex, setActiveIndex }) => {

  const isActive = (activeIndex === index);


  return <div className={`${Styles['accordion-item']} ${isActive ? Styles.active : ''} text-white`}>
    <div
      onClick={() => setActiveIndex((prevIndex) => (prevIndex === index ? null : index))}
      className={`${Styles['accordion-title']}`}>
      <h2>
        {question}
      </h2>
      {isActive ? <Icon height="32" icon="mingcute:up-line" /> : <Icon icon="mingcute:down-line" height="32" />}
    </div>
    {isActive && <div className={Styles['accordion-content']}>{answer}</div>}
  </div>
}

const Accordion = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className={Styles['accordion-container']}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          index={index}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
}

Accordion.propTypes = {
  data : PropTypes.array
}


export default Accordion;
