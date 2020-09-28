import React,{useState} from 'react';
import '../styles/Navbar.css';



function Navbar() {
  const [menu, setMenu] = useState(false);
    return (
        <nav className="nav-active">  
        <div className="logo">
          <h4>Memoir</h4>
        </div>
        <ul className={`nav-links ${menu ? "nav-active": ""}`}>  
          <li><a href="#">Dark Mode</a></li>  
          <li><a href="#">Change View</a></li>  
          <li><a href="#">Login</a></li>  
        </ul>  
        <div className="burger" onClick={()=> setMenu(!menu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>


    );
}

export default Navbar;