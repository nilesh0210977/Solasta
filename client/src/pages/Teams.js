import TeamsCard from "../components/TeamsCard";
import '../components/Teams.css';
import data from "../constants/teams";

const Teams = () => {
  
    return (
        <div className="Teams py-16 px-4 sm:px-12 lg:px-24">

            <h1 className="text-[3rem] md:text-[5rem]  text-white  text-center">Team Solasta</h1>
            <div className="teamsContainer">

            <TeamsCard data={data[0]}/>

            <div className="flex flex-col lg:flex-row gap-8 subTeams">
                    <TeamsCard data={data[1]}/>
                    <TeamsCard data={data[2]}/>
            </div>

            </div>

        </div>
    )
}
export default Teams