import React, {useState} from 'react';
import '../styles/Navbar.css';
import {MenuItems} from './MenuItems';



function Navbar() {
    const [click,setClick] = useState(false);

    var handleClick = () => {
        setClick(!click)    
    }

    return (
       <nav className="NavbarItems">
           <h1 className="navbar-logo"><i class="fas fa-book"></i></h1>
           <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars' }></i>
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               {MenuItems.map((value,key)=> {
                   return(
                    <li key={key}><a className={value.cName} href={value.url}>
                         {value.title}
                    </a>
                </li>
                   )
               })}
           </ul>
       </nav>
    );
}

export default Navbar;