import React from "react";
import logo from "../assets/MicrosoftTeams-image__3_-removebg-preview.png"

 
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
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</>





)


}

export default NavBar;






