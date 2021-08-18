import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return(
    <div id="home"> 
    <h1 style={{color:'firebrick', backgroundColor: 'grey'}}>{name} is a Web Developer from {city} </h1>
    {/* {{color:firebrick;}} --first set of brackets is telling react to eval logic and second is a style object, every object has brackets around */}
    </div>
  )
}
  
 

export default Home;
