
import { Icon } from '@iconify/react';
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/Linkedln.png'
const UserCard = ({details})=>{
    return (
        <div className='Card'>
            <img src={details.img}/>
            <p>{details.name}</p>
            <div className='Icons'>
            <Icon className='text-3xl text-white teamIcon' onClick={() => window.open(`${details.instaLink}`)} icon="mdi:instagram"/>
            <Icon className='text-3xl text-white teamIcon' onClick={() => window.open(`${details.instaLink}`)} icon="mdi:linkedin"/>
    
            </div>
        </div>
    )
}
export default UserCard;