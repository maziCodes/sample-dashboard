import Mentor from "./mentor/mentor";
import "./mentors.css"


function Mentors() {
    const mentors = [
        {
            image: 'https://media.sciencephoto.com/c0/34/78/25/c0347825-800px-wm.jpg',
            name: '',
            location: '',
            interest: '',
        },
        {
            image: 'https://media.sciencephoto.com/c0/34/78/25/c0347825-800px-wm.jpg',
            name: 'Arya Malluish',
            location: 'Alabama',
            interest: 'Interested in Economics, AI, World Politics'
        },
        {
            image: 'https://media.sciencephoto.com/c0/34/78/25/c0347825-800px-wm.jpg',
            name: 'Cindy Blues',
            location: 'Calgary',
            interest: 'Interested in Economics, AI, World Politics'
        }
    ]
    return (
        
        <div className="mentors">
            {mentors.map((mentor, i) => 
                <Mentor key={i} mentor={mentor} />
            )}
        </div>

    );
}

export default Mentors;