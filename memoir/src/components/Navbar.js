import React from 'react';
import '../styles/Navbar.css';



function Navbar() {
    

    return (
        <nav>  
        <div className="logo">
          <h4>MEMOIR</h4>
        </div>
        <ul className="container">  
          <li><a href="#">Logo</a></li>  
          <li><a href="#">Change View</a></li>  
          <li><a href="#">Login</a></li>  
        </ul>  
      </nav>


    );
}

export default Navbar;