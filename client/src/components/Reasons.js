import React from 'react'
import Styles from "./Reason.module.scss";
import SectionHeader from './SectionHeader';

import contactbtn from "../assets/contactbtn.png";
import data from "../constants/sponsor";




const ServiceCard = ({ img, data }) => {
    return (
        <figure className={`${Styles['fig-container']} bg-white border-2 border-red-400`}>
            <img src={img} alt="Service image" />
            <p>{data}</p>
        </figure>
    )
}

const Reason = () => {

    return (
        <section id="grid-section" className={Styles['service-section']} >
            <SectionHeader
                color="#D5CBFE"
                heading="10 Reasons to Sponsor"
                along="SOLASTA"
            />

            <div className={Styles['service-container']}>
                {data.map((service, i) => <ServiceCard key={i} {...service} />)}
            </div>


            <div className="img-btn">
                <img draggable={false} src={contactbtn} alt="Button" />
            </div>

        </section>
    )
}


export default Reason;