import "./mentor.css"


function Mentor({mentor}) {
    return (
        <div className="mentorImage">
            <img alt="mentor" className={mentor.name ? "imgHeightShort" : ''} src={mentor.image} />
            <div className={!!mentor.name ? 'mentorDetails' : "hideMentorDetails"}>
                <p className="name">{mentor.name}</p>
                <span className="location"> 
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    {mentor.location}
                </span>
                <span className="interest">
                    <i className="fa fa-map-o" aria-hidden="true"></i>
                    {mentor.interest}
                </span>
                <div>
                    <button className="connect">Connect Now</button>
                    <button className="ignore">Ignore</button>
                </div>
            </div>
        </div>

    );
}

export default Mentor;