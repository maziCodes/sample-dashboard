import Mentor from "./mentor/mentor";
import "./mentors.css"


function Mentors() {
    const mentors = [
        {
            image: 'https://images.unsplash.com/photo-1573496130141-209d200cebd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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