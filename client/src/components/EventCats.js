import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import { cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8 } from "../assets";
import participatebtn from "../assets/participatebtn.png";
import "./styles/eventCats.css";

import Card from "./Card";
import SectionHeader from "./SectionHeader";

const EventCats = () => {
  const navigate = useNavigate();

  const categories = [
    { img: cat3, category: "Technical Events", title: "Technical Events", description: "Engage in hands-on technical challenges and innovations." },
    { img: cat4, category: "Literature", title: "Literature Events", description: "Explore the world of literature and creative writing." },
    { img: cat5, category: "Esports", title: "Esports", description: "Compete in thrilling online and offline gaming tournaments." },
    { img: cat6, category: "Fun Games", title: "Fun Games", description: "Compete in thrilling online and offline gaming tournaments." },
    { img: cat7, category: "Digital Arts", title: "Digital Arts", description: "Compete in thrilling online and offline gaming tournaments." },
    { img: cat8, category: "Pronites", title: "Pronites", description: "Compete in thrilling online and offline gaming tournaments." },
  ];

  useEffect(() => {
    const handleResize = () => {
      const swiperInstance = document.querySelector(".hero-swiper")?.swiper;
      swiperInstance?.update(); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="event-categories" className="event-categories py-12 px-4 sm:px-12 lg:px-24">
      <SectionHeader color="#ff6f00" heading="EVENT" along=" CATEGORIES" />
      <Swiper
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        navigation={true}
        autoplay={{ delay: 3000 }}
        speed={700}
        spaceBetween={30}
        slidesPerView={4}
        observer={true}
        observeParents={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 25,
          stretch: 10,
          depth: 250,
          modifier: 1.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="hero-swiper"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Card
              image={cat.img}
              category={cat.category}
              title={cat.title}
              description={cat.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="view-all-events-btn">
        <button className="styled-view-all-button" onClick={() => navigate("/events")}>
          View All Events
        </button>
      </div>
    </section>
  );
};

export default EventCats;
