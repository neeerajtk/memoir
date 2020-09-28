import React from 'react';
import '../styles/Navbar.css';



function Navbar() {
    

    return (
        <nav>  
        <div className="logo">
          <h4>Memoir</h4>
        </div>
        <ul className="nav-links">  
          <li><a href="#">Dark Mode</a></li>  
          <li><a href="#">Change View</a></li>  
          <li><a href="#">Login</a></li>  
        </ul>  
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>


    );
}

export default Navbar;