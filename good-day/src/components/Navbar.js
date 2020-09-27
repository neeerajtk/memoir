import React from 'react';
import '../styles/Navbar.css';



function Navbar() {
    

    return (
        <nav>  
        <ul className="container">  
          <li>Home</li>  
          <li>Profile</li>  
          <li className="search">  
            <input type="text" className="search-input" placeholder="Search" />  
          </li>  
          <li>Logout</li>  
        </ul>  
      </nav>


    );
}

export default Navbar;