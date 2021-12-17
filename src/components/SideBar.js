import React from 'react';
import { Link } from 'react-router-dom';


function SideBar() {
    return ( 
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="assets/images/logo-DH.png" alt="Digital House"/>
				</div>
			</a>

			<hr className="sidebar-divider my-0"/>
			
			{/* Nav Item - Dashboard */}
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span>
                </Link>
			</li>
			<hr className="sidebar-divider"/>
			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/lastmovie">
					<i className="fas fa-fw fa-folder"></i>
					<span>Last Movie</span>
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/genres">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Genres</span></Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/movies">
					<i className="fas fa-fw fa-table"></i>
					<span>Movies</span>
                </Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/Search">
					<i className="fas fa-search"></i>
					<span>Search</span>
                </Link>
			</li>
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    );
}

export default SideBar;