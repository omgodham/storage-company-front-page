  
import { useEffect, useState } from "react";
import "./navbar.css";
function Navbar() {

const [flag,setFlag]=useState(false);

  return <div class="navbar">
  <div class="navbar-logo">
      <p>LOGO</p>
  </div>
  <div className="mobile-menu-icon" id="#mobile-menu" onClick={()=>setFlag(!flag)}>
    <span></span>
    <span></span>
    <span></span>
  </div>
<div  style={flag ? {display:'block'}:{ display:'none'}} >
  <ul class="menu">
      <li className="menu-links-close" onClick={()=>setFlag(false)} ><a className="menu-links">Close</a></li>
      <li><a href="#About" className="menu-links">ABOUT</a></li>
      <li><a href="#Team" className="menu-links"><i class="fi-xnsuxl-team-solid"></i>TEAM</a></li>
      <li><a href="#Work" className="menu-links"><i class="fi-xnsuxl-grid-solid"></i>WORK</a></li>
      <li><a href="#Price" className="menu-links"><i class="fi-xnsuxl-dollar-solid"></i>PRICING</a></li>
      <li><a href="" className="menu-links"><i class="fi-xwsuxl-envelope-solid"></i>CONTACT</a></li>
  </ul>
  </div>
</div>;

}
export default Navbar;