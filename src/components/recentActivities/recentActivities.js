import "./recentActivities.css"
import RecentActivity from "./recentActivity/recentActivity";


function RecentActivities() {
    const activities = [
        {
            image: 'https://media.sciencephoto.com/c0/34/78/25/c0347825-800px-wm.jpg',
            title: 'Esse Sylvester',
            description: 'just accepted Request',
            buttonText: 'Dismiss'
        },
        {
            image: 'https://media.sciencephoto.com/c0/34/78/25/c0347825-800px-wm.jpg',
            title: 'Esse Sylvester',
            description: 'just accepted Request',
            buttonText: 'Dismiss'
        },
        {
            image: 'https://media.sciencephoto.com/c0/34/78/25/c0347825-800px-wm.jpg',
            title: 'Esse Sylvester',
            description: 'just accepted Request',
            buttonText: 'Dismiss'
        },
        {
            image: 'https://media.sciencephoto.com/c0/34/78/25/c0347825-800px-wm.jpg',
            title: 'Esse Sylvester',
            description: 'just accepted Request',
            buttonText: 'Dismiss'
        }
    ]
    return (
        <div className="recentActivities">
            <h4>Recent Activities</h4>
            <p>View list of all system activities since last log in</p>

            <div className="activities">
                {activities.map((act, i) => 
                    <RecentActivity key={i} activity={act} />
                )}

            </div>
            <div className="moreIcon">
                <div>
                    <span></span>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    );
}

export default RecentActivities;