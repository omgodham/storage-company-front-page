import "./navbar.css";
function Navbar() {
  
  return <div class="navbar">
  <div class="navbar-logo">
      <p>LOGO</p>
  </div>
  <ul class="menu">
      <li><a href="#About" class="menu-links">ABOUT</a></li>
      <li><a href="#Team" class="menu-links"><i class="fi-xnsuxl-team-solid"></i>TEAM</a></li>
      <li><a href="#Work" class="menu-links"><i class="fi-xnsuxl-grid-solid"></i>WORK</a></li>
      <li><a href="#Price" class="menu-links"><i class="fi-xnsuxl-dollar-solid"></i>PRICING</a></li>
      <li><a href="" class="menu-links"><i class="fi-xwsuxl-envelope-solid"></i>CONTACT</a></li>
  </ul>
</div>;

}
export default Navbar;