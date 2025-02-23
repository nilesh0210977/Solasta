import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../styles/Events.css"; // External CSS for Styling
import ultimateGauntlet from "../assets/ultimate_gauntlet.jpg"; 
import blurredimage from "../assets/blurred_image.jpg";
import Ekphrasis from "../assets/Ekphrasis_Challenge.png";
import Proverbs from "../assets/Proverbs.png";
import Regional from "../assets/Regional.png";
import Famdom from "../assets/Fandom.png";
import pas from "../assets/pas.jpg";
import cinema from "../assets/Cinema.png";
import dance from "../assets/Dance-Topia.png";
import rythmic from "../assets/rythmic.png";

const EventCard = ({ _id, title, date, time, venue, img, description }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (img === "ultimate_gauntlet.jpg") {
      setImage(ultimateGauntlet);
    }if (img === "blurred_image.jpg") {
      setImage(blurredimage);
    }if (img === "Ekphrasis_Challenge.png") {
      setImage(Ekphrasis);
    }if (img === "Proverbs.png") {
      setImage(Proverbs);
    }if (img === "Regional.png") {
      setImage(Regional);
    }if (img === "Famdom.png") {
      setImage(Famdom);
    }if (img === "pas.jpg") {
      setImage(pas);
    }if (img === "Cinema.png") {
      setImage(cinema);
    }if (img === "Dance-Topia.png") {
      setImage(dance);
    }if (img === "rythmic.png") {
      setImage(rythmic);
    } else {
      import(`../assets/server/${img}`)
        .then((module) => setImage(module.default))
        .catch((error) => console.log(error));
    }
  }, [img]);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={image} alt={title} className="event-image" />
          <div className="event-name-overlay">{title}</div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <h2 className="event-title">{title}</h2>
          <p className="event-detail">
            <Icon icon="uiw:date" /> {date}
          </p>
          <p className="event-detail">
            <Icon icon="lets-icons:time-light" /> {time}
          </p>
          <p className="event-detail">
            <Icon icon="carbon:location" /> {venue}
          </p>
          <p className="event-description">{description}</p>
          {title === "Ultimate Gauntlet" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeMce0xDmwFSJnBBda2Ys5Za59vltTRa7VKkvCB_MfYhx8XPQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ) : title === "Blurred Tales" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScA44c62qAcBpTu28LsYYUBRhAzVmsJnP5EsSdo2I61zG1-uw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ) : title === "Ekphrasis Challenge" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdVYmDRcX8IySEugOjs9599McgZOiKWFltP_vP_rxEWMERrUg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ): title === "Proverbs to Poetry" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5H4eMHvf8J6Li3s7M7j98cxzB_1cjfFJgD8v8I88rciYXEw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ): title === "Proverbs to Poetry" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5H4eMHvf8J6Li3s7M7j98cxzB_1cjfFJgD8v8I88rciYXEw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ): title === "Regional Storytelling Relay" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScxcOV5xHgmT_9piefHXa930-kTf5AKj6YzAO1xZEZAyZ9_5Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ): title === "Fandom Debate" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfK3_XzwYxPi23Gx-NZO_HQosT-dKTdwV4GZxIOO_Mh4fpxbw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ): title === "Pas-seul" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeG3wBLJ-jeB6sw5T2dF94DAK2ptjskj10drgRuLDgQ8uXC6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ): title === "Cinema Replica" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd8fGQcqCdi0lMMylgxyTfW5nv8Hl7iQXSjPTYBpYWP2lSLag/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ): title === "Dance Topia" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQdLAz1XCIbmBhn4h7NZnc1qIb4bZ_GKxUVqUJhk8SOhV9qw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ): title === "Rhythmic Duo" ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUjE03uY1yHptykPlTA2pT2Ao74VHdIQTB1DQcXYeyqqZLsg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          ) : (
            <Link to="#" className="register-btn">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
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
      title: "Ultimate Gauntlet",
      date: "2025-02-20",
      time: "10:00 AM",
      venue: "Venue 1",
      img: "ultimate_gauntlet.jpg", 
      category: "Fun Games",
      description: "Brace yourself for the Ultimate Gauntlet – where only the boldest survive and legends are forged!",
    },
    {
      _id: 2,
      title: "Blurred Tales",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "blurred_image.jpg",
      category: "Literary",
      description: "Your challenge? Transform these intriguing visuals into a gripping, original story!",
    },
    {
      _id: 3,
      title: "Ekphrasis Challenge",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "Ekphrasis_Challenge.png",
      category: "Literary",
      description: "You will create a poem or essay inspired by stunning Indian art or global literary themes.",
    },
    {
      _id: 4,
      title: "Proverbs to Poetry",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "Proverbs.png",
      category: "Literary",
      description: "You will take iconic Indian proverbs and turn them into creative poems! ",
    },
    {
      _id: 5,
      title: "Regional Storytelling Relay",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "Regional.png",
      category: "Literary",
      description: "In Regional Storytelling Relay, you will be part of a team weaving a seamless story across India’s diverse languages and cultures. ",
    },
    {
      _id: 6,
      title: "Fandom Debate",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "Famdom.png",
      category: "Literary",
      description: "In Fandom Debate: Heroes vs Villains, you will either defend your favorite hero or champion a notorious villain",
    },
    {
      _id: 7,
      title: "Pas-seul",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "pas.jpg",
      category: "Performing arts",
      description: "Unleash your moves, own the spotlight, and make the stage your kingdom!",
    },
    {
      _id: 8,
      title: "Cinema Replica",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "Cinema.png",
      category: "Performing arts",
      description: "From reel to real—bring iconic dance sequences to life! 💃🎬 Get ready to groove like the greats — Register now!",
    },
    {
      _id: 9,
      title: "Dance Topia",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "Dance-Topia.png",
      category: "Performing arts",
      description: "Squad up, sync up, and light up the stage! 🌟💃 The ultimate dance battle awaits",
    },
    {
      _id: 10,
      title: "Rhythmic Duo",
      date: "2025-02-21",
      time: "11:00 AM",
      venue: "Venue 2",
      img: "rythmic.png",
      category: "Performing arts",
      description: "Double the energy, double the magic! 🔥💃 Grab your partner, own the stage 🌟✨ ",
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
      setList(events.filter((event) => event.category === category));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    filterEvents(currentCategory);
  }, [currentCategory]);

  return (
    <div className="eventsPage">
      <h1 className="event-head">Events</h1>

      <div className="categories">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => changeCategory(category)}
            className={`category-btn ${category === currentCategory ? "active" : ""}`}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="events-container">
        {list.map((event) => (
          <EventCard key={event._id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
