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
          <li><a href="#"><i class="far fa-lightbulb fa-lg"></i> </a></li>  
          <li><a href="#"><i class="fas fa-retweet fa-lg"></i> </a></li>  
          <li><a href="#"><i class="fas fa-key fa-lg"></i> </a></li>  
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