import about from "./about";
import React from "react";
import "./About.css"
// <i class="fi-xnsuxl-computer-desktop-solid"></i>
// <i class="fi-xnsuxl-heart-solid"></i>
// <i class="fi-xnsuxl-setting-solid"></i>
// <i class="fi-xnsuxl-bold"></i>

function  About() {
function show(item) {
 return  <div class="block">
      <i className={item.icon}></i>
      <h3 className="name">{item.name}</h3>
      <p className="descr">{item.descr}</p>
    </div>;
}

    return <div id="About" class="about">
        <h2>ABOUT THE COMPANY</h2>
        <p className="feature">Key features of our company</p>
        <div className="details">
             {about.map(show)}
        </div>
    </div>;

}

export default About;