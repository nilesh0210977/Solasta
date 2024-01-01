import React, { useState } from 'react'
import Styles from "./Faq.module.scss";
import Accordian from './Accordian';
import { general, accomodation } from "../constants/faqs";
import SectionHeader from './SectionHeader';
import Button from './Button';




const Faq = () => {
  const [btn, setBtn] = useState('General');
  return (
    <section id="Faqs" className={`${Styles['faq-section']}  py-12 px-4 sm:px-12 lg:px-24 `}>
      <SectionHeader color="#f05" heading="FAQs"/>
      <div className={Styles.btnContainer}>
        <Button name='General' className={btn === 'General' ? 'active' : 'notActive'} func={() => setBtn('General')} />
        <Button name='Accomodation' className={btn === 'Accomodation' ? 'active' : 'notActive'} func={() => setBtn('Accomodation')} />
      </div>
      <Accordian data={btn === 'General' ? general : accomodation} />
    </section>
  )
}

export default Faq;