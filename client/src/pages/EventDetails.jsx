import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "../components/styles/EventDetails.css";
import { Icon } from "@iconify/react";

const EventDetails = () => {

  const {id} = useParams();
  const [data, setData] = useState();
  const [image,setImage] = useState(null);


  const fetchData = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

   const module = await import(`../assets/server/${data.img}`)
    setImage(module.default);
    setData(data); 
  }

  useEffect(() => {
      fetchData(`https://solasta.vercel.app/admin/get-event-info/${id}`)
  },[id]);





  return (
    data && <div className="Event py-12 px-4 sm:px-12 lg:px-24">
      <div className="first-half">
        <div className="ed-image">
          <img src={image} alt={data?.title.png} />
        </div>
        <div className="title-div">
          <p className="title">{data?.title}</p>
        </div>
      </div>
      <div className="register-section">
        <a className="event-register-btn" href={`${data.link}`}>
          Register Now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="95"
            height="95"
            viewBox="0 0 95 95"
            fill="none"
          >
            <circle
              cx="47.3762"
              cy="47.376"
              r="33.5"
              transform="rotate(-45 47.3762 47.376)"
              fill="#130B1E"
            />
            <path
              d="M58.2004 38.049C58.2274 37.221 57.5782 36.5279 56.7502 36.5008L43.2574 36.0595C42.4294 36.0325 41.7363 36.6817 41.7092 37.5097C41.6821 38.3377 42.3314 39.0309 43.1594 39.0579L55.1529 39.4502L54.7607 51.4438C54.7336 52.2717 55.3829 52.9649 56.2109 52.992C57.0389 53.0191 57.732 52.3698 57.7591 51.5418L58.2004 38.049ZM38.0254 57.5481L57.7266 39.0948L55.6757 36.9052L35.9746 55.3586L38.0254 57.5481Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div className="Data">
        <div className="grid-section-1">
        {data.registrationFee > 0 && <div className="subgrids-1">Registration Fees: {data.registrationFee}</div> }
           <div className="subgrids-1">Type: {data.type}</div>
          {data.prizePool > 0 && <div className="subgrids-1 flex gap-2"><Icon icon='bi:trophy' />Prize Pool:{data.prizePool}</div> }
        </div>
        <div className="grid-section-2">
          <div className="subgrids-2">
            <Icon icon="uiw:date" className="icons"/>
            <span>{data.date}</span>
          </div>
          <div className="subgrids-2 double">
            <div>
              <Icon icon="ri:time-line" className="icons"/>
              <span>{data.time}</span>
            </div>
            <div>
                <Icon icon="game-icons:duration"  className="icons"/>
              <span>{data.span}</span>
            </div>
          </div>
          <div className="subgrids-2">
            <Icon icon="mingcute:location-line" className="icons"/>
            <span>{data.venue}</span>
          </div>
        </div>
    
         <div className="grid-section-3">
          <p className="rules-head">
            <Icon icon="flat-color-icons:rules" className="icons" />
            Description
          </p>
          <div className="flex flex-col gap-3 items-start  w-full">
          {data?.description.map((rule) => <p className="rules">{rule}</p>)}

          </div>
          
        </div>
        <div className="grid-section-3">
          <p className="rules-head">
            <span class="material-symbols-outlined icon">
              collections_bookmark
            </span>

            Rule Book
          </p>
          <div className="flex flex-col gap-3 items-start  w-full">
          {data?.ruleBook.map((rule) => <p className="rules">{rule}</p>)}

          </div>
          
        </div>
       
      

      </div>
    </div>
    
  );
};

export default EventDetails;
