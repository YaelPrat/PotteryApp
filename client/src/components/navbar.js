import React from "react";
 
//import bootstrap to 
import "bootstrap/dist/css/bootstrap.css";
 
//import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import navbarImage from '../assets/images/big_transperent_logo.png';
 
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 30 + '%'}} src={navbarImage} alt="Navbar Logo"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
                Add Item
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}