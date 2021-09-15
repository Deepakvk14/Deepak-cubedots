import React from 'react';
import "./home.css"
import {Link} from "react-router-dom"
function Home() {
    return (
        <div className="home">
           <Link to="/">
            Building 
           </Link>
           <Link to="gallery">
           Gallery
           </Link>
           <Link to="floor">
           Floor
           </Link>
           <Link to="locatiion">
           Location
           </Link>
           <Link to="apartment">
           Apartment
           </Link>
            
        </div>
    )
}

export default Home
