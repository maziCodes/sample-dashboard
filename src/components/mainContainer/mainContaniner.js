import LogoutButton from "../logoutButton/logoutButton";
import Mentors from "../mentors/mentors";
import RecentActivities from "../recentActivities/recentActivities";
import SideBar from "../sideBar/sideBar";
import './mainContainer.css'


function MainContainer() {
    return (
        <div className="mainContent">
            <SideBar />
            <div className="content">
                <h1 className="mainTitle">Welcome, VDW &#128075;</h1>
                <p className="mainSubTitle">You have no upcoming sessions</p>

                <div className="moreInfo">
                    <h4>Meet Your Preferred Mentor</h4>
                    <p>Mentors auto-paired with you</p>
                </div>

                <div className="dynamicContent">
                    <Mentors />
                    <RecentActivities />
                </div>
                <div className="logoutButton">
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
}

export default MainContainer;