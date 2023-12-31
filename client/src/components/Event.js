import React from 'react';
import './styles/Evnt.css';

function Event() {
    const data = {
          id: 1,
          category : "Dance",
          title: "Group Dance Competition",
          date : "10th October",
          time : "10:00 AM",
          venue: "Iot Lab, IIITDM Kurnool",
          img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgraphicriver.net%2Fdance%2Bcompetition-in-graphics&psig=AOvVaw0M34qzl02MBJDorrbDwblr&ust=1703847730097000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDfo9b9sYMDFQAAAAAdAAAAABAD",
          registrationFee : 100,
          prizePool : "50K+",
          span : "2hrs",
          noOfSlots : 10,
          ruleBook : [
            "Any style or language (Indian) is welcomed",
            "Participants will be given time duration of 7 minutes exceeding which marks will be deducted"
          ],
          link : "jhdfghjdbnmbhjxhhdbdjnchfukdjkhnsjjhsjdhdsjbvjd",
          type: "Duet",
          
        }
  return (
    <div className="Event">
        <span className="backTitle">{data.title}</span>
        <div className="image">
            <img src={data.img} alt={data.title.png} />
            <span className="title">{data.title}</span>
        </div>
        <div className="Data">
            
        </div>
    </div>
  )
}

export default Event