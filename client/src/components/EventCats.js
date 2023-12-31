import React from "react";
import { useNavigate } from "react-router-dom";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.png";
import i3 from "../assets/3.png";
import "./styles/card.css";
import participatebtn from "../assets/participatebtn.png";

import Card from "./Card";
import SectionHeader from "./SectionHeader";

const EventCats = () => {
  const navigate = useNavigate();
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
          2000: { slidesPerView: 4.5 , spaceBetween:40},
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
        <SwiperSlide>
          <Card image={i1} title="Cultural" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={i2} title="Literary" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card image={i3} title="Technical" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={i1} title="Fine Arts" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={i2} title="Sports" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={i3} title="Fashion" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={i1} title="Informals" />
        </SwiperSlide>
      </Swiper>
      <div className="img-btn">
        <img draggable={false} src={participatebtn} onClick={() => navigate("/events") }  alt="Button"   className="cursor-pointer"/>
      </div>
    </section>
  );
};

export default EventCats;
