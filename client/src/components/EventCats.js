import React from "react";
import { useNavigate } from "react-router-dom";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css";

import { cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8 } from "../assets";
import participatebtn from "../assets/participatebtn.png";
import "./styles/card.css";

import Card from "./Card";
import SectionHeader from "./SectionHeader";

const EventCats = () => {
  const navigate = useNavigate();

  const data = [
    {
      img: cat1,
      category: "Performing arts",
    },
    {
      img: cat2,
      category: "Creative Arts",
    },
    {
      img: cat3,
      category: "Technical Events",
    },
    {
      img: cat4,
      category: "Literary",
    },
    {
      img: cat5,
      category: "Esports",
    },
    {
      img: cat6,
      category: "Fun Games",
    },
    {
      img: cat7,
      category: "Digital Arts",
    },
    {
      img: cat8,
      category: "Pronites",
    },
  ]




  return (
    <section id="event-categories" className="py-12 px-4 sm:px-12 lg:px-24">
      <SectionHeader color="#f05" heading="EVENT" along=" CATEGORIES" />
      <Swiper
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[EffectCoverflow]}
        slidesPerView={1.3}
        spaceBetween={30}
        breakpoints={{
          481: { slidesPerView: 1.5, spaceBetween: 30 },
          522: { spaceBetween: 40, slidesPerView: 1.8 },
          768: { spaceBetween: 40, slidesPerView: 2.2 },
          910: { slidesPerView: 2.5, spaceBetween: 60 },
          1080: { slidesPerView: 3 },
          1281: { slidesPerView: 3.5, spaceBetween: 50 },
          1500: { slidesPerView: 4 },
          2000: { slidesPerView: 4.5, spaceBetween: 40 },
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className="hero-swiper"
        data-name="hero-swiper"
        data-page="landing"
      >

        {data.map((details) => <SwiperSlide><Card image={details.img} category={details.category} title="Details" /></SwiperSlide>)}
      </Swiper>
      <div className="img-btn">
        <img draggable={false} src={participatebtn} onClick={() => navigate("/events")} alt="Button" className="cursor-pointer" />
      </div>
    </section>
  );
};

export default EventCats;
