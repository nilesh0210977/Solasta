import { Icon } from "@iconify/react";

const UserCard = ({ details }) => {
    return (
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl text-white flex flex-col items-center">
            <img
                src={details.img}
                alt={details.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-md"
            />
            <div className="text-center mt-4">
                <p className="text-lg font-semibold">{details.name}</p>
                <p className="text-sm text-gray-300">{details.designation}</p>
            </div>

            <div className="flex gap-4 mt-3">
                {details.instaLink && (
                    <Icon
                        className="text-3xl text-pink-500 transition duration-300 hover:text-pink-400 cursor-pointer"
                        onClick={() => window.open(details.instaLink)}
                        icon="mdi:instagram"
                    />
                )}
                {details.linkedinLink && (
                    <Icon
                        className="text-3xl text-blue-500 transition duration-300 hover:text-blue-400 cursor-pointer"
                        onClick={() => window.open(details.linkedinLink)}
                        icon="mdi:linkedin"
                    />
                )}
            </div>
        </div>
    );
};

export default UserCard;
