
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/Linkedln.png'
const UserCard = ({details})=>{
    return (
        <div className='Card'>
            <img src={details.img}/>
            <p>{details.name}</p>
            <div className='Icons'>
                <a href={details.instaLink} target='_blank'><img src={Instagram} className='icon'/></a>
                <a href={details.linkedinLink} target='_blank'><img src={LinkedIn} className='icon'/></a>
            </div>
        </div>
    )
}
export default UserCard;