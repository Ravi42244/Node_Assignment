import React from "react";
import logo from "../assets/MicrosoftTeams-image__3_-removebg-preview.png"
import { Link, NavLink } from 'react-router-dom';

 
 const NavBar = ()=>{



return(



<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    <img src={logo} alt="Bootstrap" width="125" height="50"/>
                  </a>
                
             
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</>





)


}

export default NavBar;






