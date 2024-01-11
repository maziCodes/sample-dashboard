

import "./logoutButton.css"


function LogoutButton() {

    return (
        <button className="logout">
            <i className="fa fa-power-off" aria-hidden="true"></i> 
            Log out
        </button>
    );
}

export default LogoutButton;