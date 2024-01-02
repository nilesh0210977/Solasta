import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion";



const EventCard = ({ _id, title, date, time, venue, img,}) => {

  const [image,setImage] = useState(null);

  useEffect(() => {
    import(`../assets/server/${img}`)
    .then((module) => {
      setImage(module.default);
    })
    .catch((error) => {
      console.log(error);
    })
  },[img])


  return (
    <motion.div variants={fadeIn("up", "spring", _id * 0.5, 0.75)}   className="mainCard cursor-pointer flex flex-col relative overflow-hidden text-white">
        <img src={image} alt="" />
        <div className="hoverCard">
          <div className="flex flex-col gap-3">
            <p className="events-para"><Icon icon="uiw:date" /> - {date} </p>
            <p className="events-para"><Icon icon="lets-icons:time-light" /> - {time} </p>
            <p className="events-para"><Icon icon='carbon:location' /> - {venue}</p>
          </div>

          <Link to={`/events/${_id}`} className="bg-[#f05] text-white text-[1.3rem] p-3" >Show Details</Link>
        </div>

      <h2 className="text-[1.5rem]  2xl:text-[2rem]  text-white mx-auto my-4" >{title}</h2>
    </motion.div>
  )
}


const Events = () => {


  const location = useLocation();
  const category = location.state || 'All';
  const categories = ["All", "Performing arts", "Creative Arts", "Technical Events", "Fun Games", "Esports","Literary","Digital Arts","Pronites"];
 
  const [currentCategory, setCurrentCategory] = useState(category);
  const [list, setList] = useState([]);
  

  const changeCategory = (category) => {
    setCurrentCategory(category);
    fetchData("http://65.2.6.123/admin/get-events",category);
  }


  const fetchData = async(url,currentCategory) => {
    // console.log(currentCategory)
    if(currentCategory && currentCategory !== "All") url = `${url}/${currentCategory}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setList(data); 
  }

  useEffect(() => {
    window.scrollTo(0,0);
    fetchData("http://65.2.6.123/admin/get-events",currentCategory);
  },[]);


  return (
    <div className="eventsPage" id="events">
      <div className="events-section">
        <h1 className="event-head">Events</h1>
        <Timer className='timerEvents' />
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
        {categories.map((category) =>
          <div onClick={() => changeCategory(category)} className={`border-2 text-white px-4 py-2 rounded-lg cursor-pointer ${category === currentCategory ? 'text-[#F05] border-2 border-[#F05]' : ''}`}>
            {category}
          </div>
        )}

      </div>

      <div className="events-container">
        {list?.map((event) => <EventCard {...event} />)}
      </div>

    </div>
  );
};

export default Events;
