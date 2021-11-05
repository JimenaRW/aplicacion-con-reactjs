import TopBarNavBar from "./TopBarNavBar";

function TopBar() {
    return ( 
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
					
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <TopBarNavBar/>

		</nav>
     );
}

export default TopBar;