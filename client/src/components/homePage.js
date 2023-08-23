import React from "react";
import { Link } from "react-router-dom";
import "./css/homePage.css"; 

const HomePage = () => {
    return (  
       <div className="home">
    <Link to="/gallery" className="square">
      My Gallery
    </Link>
    <Link to="/page2" className="square">
      Page 2
    </Link>
    <Link to="/page3" className="square">
      Page 3
    </Link>
    <Link to="/page4" className="square">
      Page 4
    </Link>
  </div> );
}
 
export default HomePage;