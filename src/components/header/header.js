import './header.css'


function Header() {

    return (
        <div className="headerContrainer">
            <div className="headerAction">
                <div className="notice">
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                    <span className="counter">3</span>
                </div>
                <div className="userAvatar">
                    <img alt="avatar" src="https://thepienews.com/wp-content/uploads/2020/01/Profile-Picture-Small.jpg" />
                </div>
                <div>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
            </div>

        </div>
    )

}

export default Header;