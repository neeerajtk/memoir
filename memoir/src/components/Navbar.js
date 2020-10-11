import React,{useState} from 'react';
import {auth} from '../firebase/farebase.utils';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';



function Navbar(props) {
  const [menu, setMenu] = useState(false);
    return (
        <nav className="nav-active">  
        <div className="logo">
          <h4>MEMOIR</h4>
        </div>
        <ul className={`nav-links ${menu ? "nav-active": ""}`}>  
          <li><Link to="/"><i className="fas fa-lightbulb fa-lg"></i></Link></li>  
          <li><Link to="/"><i className="fas fa-retweet fa-lg"></i></Link></li>  
          <li><Link to="/"><i className="fas fa-key fa-lg"></i></Link></li>  
          { 
          props.currentUser ?
          <div className="sign-out" onClick={()=>auth.signOut()}>SIGN OUT</div>
          :
          <Link className="sign-in" to="/signin">SIGN IN</Link>
        } 
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