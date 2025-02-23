import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const EventCard = ({ _id, title, date, time, venue, img }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    import(`../assets/server/${img}`)
      .then((module) => {
        setImage(module.default);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [img]);

  return (
    <motion.div
      variants={fadeIn("up", "spring", _id * 0.5, 0.75)}
      className="mainCard cursor-pointer flex flex-col relative overflow-hidden text-white"
    >
      <img src={image} alt="" />
      <div className="hoverCard">
        <div className="flex flex-col gap-3">
          <p className="events-para">
            <Icon icon="uiw:date" /> - {date}
          </p>
          <p className="events-para">
            <Icon icon="lets-icons:time-light" /> - {time}
          </p>
          <p className="events-para">
            <Icon icon="carbon:location" /> - {venue}
          </p>
        </div>

        <Link
          to="#" 
          className="bg-[#ff6f00] text-white text-[1.3rem] p-3 hover:bg-[#ff8533] transition-colors"
        >
          Register
        </Link>
      </div>

      <h2 className="text-[1.5rem] 2xl:text-[2rem] text-white mx-auto my-4">
        {title}
      </h2>
    </motion.div>
  );
};

const Events = () => {
  const location = useLocation();
  const category = location.state || "All";
  const categories = [
    "All",
    "Performing arts",
    "Creative Arts",
    "Technical Events",
    "Fun Games",
    "Esports",
    "Literary",
    "Digital Arts",
    "Pronites",
  ];

  const [currentCategory, setCurrentCategory] = useState(category);
  const [list, setList] = useState([]);

  const events = [
    {
      _id: 1,
      title: "Event 1",
      date: "2025-02-20",
      time: "10:00 AM",
      venue: "Venue 1",
      img: "event1.jpg",
      category: "Performing arts",
    },
    {
      _id: 2,
      title: "Event 2",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "event2.jpg",
      category: "Creative Arts",
    },

  ];

  const changeCategory = (category) => {
    setCurrentCategory(category);
    filterEvents(category);
  };

  const filterEvents = (category) => {
    if (category === "All") {
      setList(events);
    } else {
      const filteredEvents = events.filter(
        (event) => event.category === category
      );
      setList(filteredEvents);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    filterEvents(currentCategory);
  }, [currentCategory]);

  return (
    <div className="eventsPage" id="events">
      <div className="events-section">
        <h1 className="event-head">Events</h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => changeCategory(category)}
            className={`border-2 text-white px-4 py-2 rounded-lg cursor-pointer ${
              category === currentCategory
                ? "text-[#ff6f00] border-2 border-[#ff6f00]"
                : ""
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="events-container">
        {list?.map((event) => (
          <EventCard key={event._id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
