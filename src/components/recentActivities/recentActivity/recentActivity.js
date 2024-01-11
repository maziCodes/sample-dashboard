import './recentActivity.css'


function RecentActivity({activity}) {
    return (
        <div className='activity'>
            <img alt='activity' src={activity.image} />
            <div>
                <span>{activity.title}</span>
                <span>{activity.description}</span>
            </div>

            <button>{activity.buttonText}</button>
        </div>
    );
}

export default RecentActivity;