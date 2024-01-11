import './sideBar.css'
 
 function SideBar() {

    const sideBarItems = [
        {
            iconName: 'fa fa-compass'
        },
        {
            iconName: 'fa fa-star'
        },
        {
            iconName: 'fa fa-comment'
        },
        {
            iconName: 'fa fa-line-chart'
        },
        {
            iconName: 'fa fa-globe'
        },
        {
            iconName: 'fa fa-building'
        }
    
    ]

    return (
        
        <div className="sideBar">
            <ul className="sideBarMenu">
                {sideBarItems.map((item, i) => 
                <li key={i}>
                    <i className={item.iconName + (i === 0 ? ' active' : '' )} aria-hidden="true"></i>
                </li>
                )}
            </ul>
        </div>
    );
 }

 export default SideBar;