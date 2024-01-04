import { Icon } from '@iconify/react';

const UserCard = ({ details }) => {
    return (
        <div className='Card'>
            <img src={details.img} />
            <div className='flex flex-col mt-4'>
            <p>{details.name}</p>
            <p className='designation'>{details.designation}</p>
            </div>

            <div className='Icons'>
                {details.instaLink !== "" && <Icon className='text-3xl text-white teamIcon' onClick={() => window.open(`${details.instaLink}`)} icon="mdi:instagram" />}
                {details.linkedinLink !== "" && <Icon className='text-3xl text-white teamIcon' onClick={() => window.open(`${details.linkedinLink}`)} icon="mdi:linkedin" />}
            </div>
        </div>
    )
}
export default UserCard;