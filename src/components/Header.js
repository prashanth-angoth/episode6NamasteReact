// always create a component with capital letter
// somepeople create new component with JSX extension, it doesn't matter which extension
//  you're using for component

import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
// if we want to add inline styling in jsx we have to create object like this and
// use in the particular div or span
const styleCard={
    backgroundColor:"orange"
  }

const Header=()=>{
  const [logButton,setLogButton] = useState("log in");
    return (
      <div className="header" style={styleCard}>
        <div>
        <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>cart</li>
            <li><button onClick={()=>{
              if(logButton=="log in"){
                setLogButton("log out")
              }
              if(logButton=="log out"){
                setLogButton("log in")
              }
              
            }}>{logButton}</button></li>
          </ul>
        </div>
        </div>
    )
  
  }

  export default Header //always export components so that it can be usefull in other components 