import React from 'react'
import Styles from "./Reason.module.scss";
import SectionHeader from './SectionHeader';

import contactbtn from "../assets/contactbtn.png";




const ServiceCard = ({ image, text }) => {
    return (
        <figure className={Styles['fig-container']}>
            <img src={image} alt="Service image" />
        </figure>
    )
}

const Reason = () => {


    const data = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVB1cE5RI2YgGT0Uq6wER-f3Gj-yzVvQefcI_0g_k1-xOTBlkicemkWgY_O2znoCWAgNM&usqp=CAU",
            text: "",
        },
        {
            image: "https://assets-global.website-files.com/61cee5ec4d566db869eca133/649a92019fe297f36feabfa1_647dc803a32b743f5a4415ef_Frame%202.png",
            text: "",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVB1cE5RI2YgGT0Uq6wER-f3Gj-yzVvQefcI_0g_k1-xOTBlkicemkWgY_O2znoCWAgNM&usqp=CAU",
            text: "",
        },
        {
            image: "https://assets-global.website-files.com/61cee5ec4d566db869eca133/649a92019fe297f36feabfa1_647dc803a32b743f5a4415ef_Frame%202.png",
            text: "",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVB1cE5RI2YgGT0Uq6wER-f3Gj-yzVvQefcI_0g_k1-xOTBlkicemkWgY_O2znoCWAgNM&usqp=CAU",
            text: "",
        },
        {
            image: "https://assets-global.website-files.com/61cee5ec4d566db869eca133/649a92019fe297f36feabfa1_647dc803a32b743f5a4415ef_Frame%202.png",
            text: "",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVB1cE5RI2YgGT0Uq6wER-f3Gj-yzVvQefcI_0g_k1-xOTBlkicemkWgY_O2znoCWAgNM&usqp=CAU",
            text: "",
        },
        {
            image: "https://assets-global.website-files.com/61cee5ec4d566db869eca133/649a92019fe297f36feabfa1_647dc803a32b743f5a4415ef_Frame%202.png",
            text: "",
        },
    ]



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