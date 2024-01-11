import Mentors from "../mentors/mentors";
import RecentActivities from "../recentActivities/recentActivities";
import SideBar from "../sideBar/sideBar";
import './mainContainer.css'


function MainContainer() {
    return (
        <div className="mainContent">
            <SideBar />
            <div>
                <h1>Welcome, VDW</h1>
                <p>You have no upcoming sessions</p>
                <div>
                    <h4>Meet Your Preferred Mentor</h4>
                    <p>Mentors auto-paired with you</p>
                </div>

                <div>
                    <Mentors />
                    <RecentActivities />
                </div>
            </div>
        </div>
    );
}

export default MainContainer;