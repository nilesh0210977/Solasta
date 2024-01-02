import { useState } from "react"
import TeamsCard from "../Components/TeamsCard"
import './Teams.css'
const Teams = ()=>{
    const [data,setdata] = useState([
        {
            title : "Coordinators",
            data : [
                {
                    name : "Aditya",
                    img : "https://www.themoviedb.org/t/p/w500/3vIkgOe1aqA4DqZtefYkYm2LtD.jpg",
                    instaLink : "https://www.instagram.com/lanarhoades/",
                    linkedinLink: "https://www.linkedin.com/",
                },
            ]
        },{
            title : "Web Team",
            data : [
                {
                    name : "Some random",
                    img : "https://static.independent.co.uk/2023/10/10/14/newFile-3.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp",
                    instaLink : "https://www.instagram.com/miakhalifa/?hl=en",
                    linkedinLink : "https://www.linkedin.com/"
                }
            ]
        }
    ])
    return (
        <div className="Teams">
            {
                data.map((dt)=>{
                    return (
                    <TeamsCard data={dt}/>
                    )
                })
            }
            
        </div>
    )
}
export default Teams