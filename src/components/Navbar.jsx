  
import CloseIcon from '@material-ui/icons/Close';
import "./navbar.css";
function Navbar() {
 function  show() {
  const sidebar=document.querySelector(".menu");
  sidebar.classList.toggle("active");
 }

  
  return <div class="navbar">
  <div class="navbar-logo">
      <p>LOGO</p>
  </div>
  <div className="mobile-menu-icon" id="#mobile-menu" onClick={show}>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <ul class="menu">
  <CloseIcon className="close-btn" onClick={show}/>
      {/* <li className="menu-links-close" ><a className="menu-links">Close</a></li> */}
      <li><a href="#About" className="menu-links">ABOUT</a></li>
      <li><a href="#Team" className="menu-links"><i class="fi-xnsuxl-team-solid"></i>TEAM</a></li>
      <li><a href="#Work" className="menu-links"><i class="fi-xnsuxl-grid-solid"></i>WORK</a></li>
      <li><a href="#Price" className="menu-links"><i class="fi-xnsuxl-dollar-solid"></i>PRICING</a></li>
      <li><a href="" className="menu-links"><i class="fi-xwsuxl-envelope-solid"></i>CONTACT</a></li>
  </ul>
</div>;

}
export default Navbar;