import TeamsCard from "../components/TeamsCard";
import "../components/Teams.css";
import data from "../constants/teams";

const Teams = () => {
    return (
        <div className="py-16 px-6 sm:px-12 lg:px-24 min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 tracking-wider">
                Team Solasta
            </h1>

            <div className="space-y-12">
                <TeamsCard data={data[0]} />
                <TeamsCard data={data[1]} />
                <TeamsCard data={data[2]} />
                <TeamsCard data={data[3]} />
                <div className="flex flex-col lg:flex-row gap-10">
                    
                </div>
            </div>
        </div>
    );
};

export default Teams;
