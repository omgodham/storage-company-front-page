import "./Work.css";
import React from "react";
import images from "./images";
function Work() {
function  show(item) {
    return <div className="image-div">
    <img className="image" src={item}></img>
    </div>;
}
    return <div id="work" className="team">
    <h3 className="heading" style={{paddingTop:0}}>OUR WORK</h3>
    <p className="heading2">What we've done for people</p>
    <div className="images">
        {images.map(show)}
    </div>
    </div>
}
export default Work;