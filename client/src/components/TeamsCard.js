import UserCard from "./UserCard";

const TeamsCard = ({ data }) => {
    return (
        <div className="bg-[#0f0f1a] p-8 rounded-xl shadow-lg transition hover:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 uppercase tracking-widest">
                {data.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                {data.data.map((details, index) => (
                    <UserCard key={index} details={details} />
                ))}
            </div>
        </div>
    );
};

export default TeamsCard;
