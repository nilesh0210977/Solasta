import UserCard from "./UserCard"

const TeamsCard = ({ data }) => {
    return (
        <div>
            <h3 className="title">{data.title}</h3>
            <div className="sectionContainer">
                {data.data.map((details) => {
                    return (<UserCard details={details} />)
                })}
            </div>

        </div>
    )
}
export default TeamsCard