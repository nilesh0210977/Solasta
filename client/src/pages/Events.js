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
import dj_night from "../assets/dj_night.png";
import ramp_walk from "../assets/ramp_walk.png";
import drama from "../assets/drama.png";
import sur_sangam from "../assets/sur_sangam.png";
import battle_of_bands from "../assets/battle_of_bands.png";
import troupe_dance from "../assets/troupe_dance.png";
import alankar from "../assets/alankar.png";
import rhythm_riffs from "../assets/rhythm_riffs.png";
import clay_art from "../assets/clay_art.png";
import neon_resin_art from "../assets/neon_resin_art.png";
import coding_knockout from "../assets/coding_knockout.png";
import coding_contest from "../assets/coding_contest.png";
import bitsquad from "../assets/bitsquad.png";
import robot_showcase from "../assets/robot_showcase.png";
import maze_runner from "../assets/maze_runner.png";
import hopscotch from "../assets/hopscotch.png";
import chidiya_udd from "../assets/chidiya_udd.png";
import marble_games from "../assets/marble_games.png";
import squid_game from "../assets/squid_game.png";
import sherlock_byomkesh from "../assets/sherlock_byomkesh.png";
import murder_mystery from "../assets/murder_mystery.png";
import pw from "../assets/pw.jpg";


const EventCard = ({ _id, title, date, time, venue, img, description }) => {
  const [image, setImage] = useState(null);
  

  const imageMap = {
    "ultimate_gauntlet.jpg": ultimateGauntlet,
    "blurred_image.jpg": blurredimage,
    "Ekphrasis_Challenge.png": Ekphrasis,
    "Proverbs.png": Proverbs,
    "Regional.png": Regional,
    "Famdom.png": Famdom,
    "pas.jpg": pas,
    "Cinema.png": cinema,
    "Dance-Topia.png": dance,
    "rythmic.png": rythmic,
    "dj_night.png": dj_night,
    "ramp_walk.png": ramp_walk,
    "drama.png": drama,
    "sur_sangam.png": sur_sangam,
    "battle_of_bands.png": battle_of_bands,
    "troupe_dance.png": troupe_dance,
    "alankar.png": alankar,
    "rhythm_riffs.png": rhythm_riffs,
    "clay_art.png": clay_art,
    "neon_resin_art.png": neon_resin_art,
    "coding_knockout.png": coding_knockout,
    "coding_contest.png": coding_contest,
    "bitsquad.png": bitsquad,
    "robot_showcase.png": robot_showcase,
    "maze_runner.png": maze_runner,
    "hopscotch.png": hopscotch,
    "chidiya_udd.png": chidiya_udd,
    "marble_games.png": marble_games,
    "squid_game.png": squid_game,
    "sherlock_byomkesh.png": sherlock_byomkesh,
    "murder_mystery.png": murder_mystery,
    "pw.jpg":pw,
  };
  
  
  useEffect(() => {
    if (img) {
      if (imageMap[img]) {
        setImage(imageMap[img]); // Use preloaded images
      } else {
        import(`../assets/server/${img}`)
          .then((module) => setImage(module.default))
          .catch((error) => console.log(`Error loading image: ${img}`, error));
      }
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
            <Link to="/register" className="register-btn">
              Register
            </Link>
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
    "Literary",
    "Pronites",
  ];

  const [currentCategory, setCurrentCategory] = useState(category);
  const [list, setList] = useState([]);

  const events = [
    {
      _id: 1,
      title: "Ultimate Gauntlet",
      date: "March 15",
      time: "9:00 - 10:30 AM",
      venue: "To Be Announced",
      img: "ultimate_gauntlet.jpg", 
      category: "Fun Games",
      description: "Brace yourself for the Ultimate Gauntlet – where only the boldest survive and legends are forged!",
    },
    {
      _id: 2,
      title: "Blurred Tales",
      date: "March 16",
      time: "9:00 - 10:30 AM",
      venue: "To Be Announced",
      img: "blurred_image.jpg",
      category: "Literary",
      description: "Your challenge? Transform these intriguing visuals into a gripping, original story!",
    },
    {
      _id: 3,
      title: "Ekphrasis Challenge",
      date: "March 16",
      time: "9:00 - 10:30 AM",
      venue: "To Be Announced",
      img: "Ekphrasis_Challenge.png",
      category: "Literary",
      description: "You will create a poem or essay inspired by stunning Indian art or global literary themes.",
    },
    {
      _id: 4,
      title: "Proverbs to Poetry",
      date: "March 15",
      time: "9:00 - 10:30 AM",
      venue: "To Be Announced",
      img: "Proverbs.png",
      category: "Literary",
      description: "You will take iconic Indian proverbs and turn them into creative poems! ",
    },
    {
      _id: 5,
      title: "Regional Storytelling Relay",
      date: "March 15",
      time: "9:00 - 10:30 AM",
      venue: "To Be Announced",
      img: "Regional.png",
      category: "Literary",
      description: "In Regional Storytelling Relay, you will be part of a team weaving a seamless story across India’s diverse languages and cultures. ",
    },
    {
      _id: 6,
      title: "Fandom Debate",
      date: "March 16",
      time: "9:00 - 10:30 AM",
      venue: "To Be Announced",
      img: "Famdom.png",
      category: "Literary",
      description: "In Fandom Debate: Heroes vs Villains, you will either defend your favorite hero or champion a notorious villain",
    },
    {
      _id: 7,
      title: "Pas-seul",
      date: "March 15",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "pas.jpg",
      category: "Performing arts",
      description: "Unleash your moves, own the spotlight, and make the stage your kingdom!",
    },
    {
      _id: 8,
      title: "Cinema Replica",
      date: "March 15",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "Cinema.png",
      category: "Performing arts",
      description: "From reel to real—bring iconic dance sequences to life! 💃🎬 Get ready to groove like the greats — Register now!",
    },
    {
      _id: 9,
      title: "Dance Topia",
      date: "To Be Announced",
      time: "To Be Announced",
      venue: "To Be Announced",
      img: "Dance-Topia.png",
      category: "Performing arts",
      description: "Squad up, sync up, and light up the stage! 🌟💃 The ultimate dance battle awaits",
    },
    {
      _id: 10,
      title: "Rhythmic Duo",
      date: "March 16",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "rythmic.png",
      category: "Performing arts",
      description: "Double the energy, double the magic! 🔥💃 Grab your partner, own the stage 🌟✨ ",
    },
    {
      _id: 11,
      title: "Murder Mystery",
      date: "March 15",
      time: "9:00 - 10:30 AM",
      venue: "To Be Announced",
      img: "murder_mystery.png",
      category: "Fun Games",
      description: "Put your detective hat on and solve the thrilling murder mystery!",
    },
    {
      _id: 12,
      title: "Sherlock Meets Byomkesh",
      date: "March 15",
      time: "9:00 - 10:30 AM",
      venue: "To Be Announced",
      img: "sherlock_byomkesh.png",
      category: "Literary",
      description: "A fusion of two great detectives—are you ready to deduce the truth?",
    },
    {
      _id: 13,
      title: "Physics Wallah Talk",
      date: "March 15",
      time: "11:00-11:50 AM",
      venue: "To Be Announced",
      img: "pw.jpg",
      category: "Literary",
      description: "Physics Wallah Talk \- Unleashing Knowledge  \,Sparking Curiosity and Empowering Minds for a Brighter Tomorrow!",
    },
    {
      _id: 14,
      title: "Squid Game",
      date: "March 15",
      time: "10:00 - 11:00 AM",
      venue: "To Be Announced",
      img: "squid_game.png",
      category: "Fun Games",
      description: "Compete in thrilling games inspired by the popular series. Will you survive?",
    },
    {
      _id: 15,
      title: "Marble Games",
      date: "March 15",
      time: "11:00 AM - 12:00 PM",
      venue: "To Be Announced",
      img: "marble_games.png",
      category: "Fun Games",
      description: "Test your skills in classic marble games with a competitive twist!",
    },
    {
      _id: 16,
      title: "Chidiya Udd",
      date: "March 16",
      time: "10:00 - 11:00 AM",
      venue: "To Be Announced",
      img: "chidiya_udd.png",
      category: "Fun Games",
      description: "A childhood classic with a fun twist! Test your reflexes and memory.",
    },
    {
      _id: 17,
      title: "Hopscotch",
      date: "March 16",
      time: "11:00 AM - 12:00 PM",
      venue: "To Be Announced",
      img: "hopscotch.png",
      category: "Fun Games",
      description: "Jump, balance, and aim for victory in this traditional game.",
    },
    {
      _id: 18,
      title: "Maze Runner",
      date: "March 15",
      time: "11:00 AM - 2:00 PM",
      venue: "To Be Announced",
      img: "maze_runner.png",
      category: "Fun Games",
      description: "Navigate through a tricky maze—only the smartest will escape!",
    },
    {
      _id: 19,
      title: "Robot Showcase",
      date: "March 15",
      time: "3:00 - 5:45 PM",
      venue: "To Be Announced",
      img: "robot_showcase.png",
      category: "Technical Events",
      description: "Witness futuristic robots in action at this innovative showcase!",
    },
    {
      _id: 20,
      title: "BitSquad Coding Contest",
      date: "March 15",
      time: "1:00 - 3:00 PM",
      venue: "To Be Announced",
      img: "bitsquad.png",
      category: "Technical Events",
      description: "Join the BitSquad and test your coding and problem-solving skills!",
    },
    {
      _id: 21,
      title: "Coding Contest",
      date: "March 15",
      time: "1:00 - 3:00 PM",
      venue: "To Be Announced",
      img: "coding_contest.png",
      category: "Technical Events",
      description: "Compete against the best minds in this high-intensity coding contest!",
    },
    {
      _id: 22,
      title: "Coding Knockout",
      date: "March 15",
      time: "3:00 - 5:45 PM",
      venue: "To Be Announced",
      img: "coding_knockout.png",
      category: "Technical Events",
      description: "Face off in an elimination-style coding battle!",
    },
    {
      _id: 23,
      title: "Neon and Resin Art",
      date: "March 15",
      time: "2:00 - 3:30 PM",
      venue: "To Be Announced",
      img: "neon_resin_art.png",
      category: "Creative Arts",
      description: "Create mesmerizing neon and resin art masterpieces!",
    },
    {
      _id: 24,
      title: "Clay Art",
      date: "March 16",
      time: "2:00 - 3:30 PM",
      venue: "To Be Announced",
      img: "clay_art.png",
      category: "Creative Arts",
      description: "Mold, shape, and bring your imagination to life with clay!",
    },
    {
      _id: 26,
      title: "Rhythm & Riffs",
      date: "March 15",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "rhythm_riffs.png",
      category: "Performing Arts",
      description: "A mesmerizing blend of music and rhythm that captivates the soul!",
    },
    {
      _id: 27,
      title: "Alankar",
      date: "March 15",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "alankar.png",
      category: "Performing Arts",
      description: "A musical celebration of classical and contemporary melodies.",
    },
    {
      _id: 29,
      title: "Troupe Dance",
      date: "March 16",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "troupe_dance.png",
      category: "Performing Arts",
      description: "An electrifying group dance performance that will leave you amazed!",
    },
    {
      _id: 30,
      title: "Battle of Bands",
      date: "March 16",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "battle_of_bands.png",
      category: "Performing Arts",
      description: "Bands compete for the ultimate title in this epic showdown!",
    },
    {
      _id: 31,
      title: "Sur Sangam",
      date: "March 16",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "sur_sangam.png",
      category: "Performing Arts",
      description: "A harmonious blend of melodies from various cultures and traditions.",
    },
    {
      _id: 32,
      title: "Drama",
      date: "March 16",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "drama.png",
      category: "Performing Arts",
      description: "Experience gripping performances in this dramatic showcase!",
    },
    {
      _id: 33,
      title: "Ramp Walk",
      date: "March 16",
      time: "5:00 - 7:30 PM",
      venue: "To Be Announced",
      img: "ramp_walk.png",
      category: "Performing Arts",
      description: "Walk the ramp with style and grace in this glamorous event!",
    },
    {
      _id: 34,
      title: "DJ Night with Jockey",
      date: "March 16",
      time: "8:30 PM - Late",
      venue: "To Be Announced",
      img: "dj_night.png",
      category: "Pronites",
      description: "End the night with electrifying beats and non-stop energy!",
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
