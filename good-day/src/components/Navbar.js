import React from 'react';
import '../styles/Navbar.css';
import {MenuItems} from './MenuItems';

function Navbar() {
    return (
       <nav className="NavbarItems">
           <h1 className="navbar-logo">Good Day</h1>
           <div className="menu-icon"></div>
           <ul>
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