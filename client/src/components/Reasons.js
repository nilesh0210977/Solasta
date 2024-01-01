import React from 'react'
import Styles from "./Reason.module.scss";
import SectionHeader from './SectionHeader';
import {useNavigate} from "react-router-dom";

import contactbtn from "../assets/contactbtn.png";
import data from "../constants/sponsor";




const ServiceCard = ({ img, data }) => {
    return (
        <figure className={`${Styles['fig-container']} bg-white border-2 border-red-400`}>
            <img src={img} alt="Service image" />
            <figcaption>{data}</figcaption>
        </figure>
    )
}

const Reason = () => {

    const navigate = useNavigate();

    return (
        <section id="grid-section" className={Styles['service-section']} >
            <SectionHeader
                color="#f05"
                heading="Reasons to Sponsor"
                along="SOLASTA"
            />

            <div className={Styles['service-container']}>
                {data.map((service, i) => <ServiceCard key={i} {...service} />)}
            </div>


            <div className="img-btn">
                <img draggable={false} src={contactbtn} alt="Button" onClick={() => navigate("/teams")} />
            </div>

        </section>
    )
}


export default Reason;