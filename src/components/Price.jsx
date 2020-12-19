import React from "react";
import "./Price.css";
import $ from "jquery";
import price from "./price"
function Price(){
    function show(item){
        return <div id={ item.storage===25 ? "active" : null} className="price-card">
            <ul className="price-menu">
                <li id={ item.storage===25 ? "is-active" : null} class="price-menu-links plan">{item.plan}</li>
                <li class="price-menu-links"><b>{item.storage}GB</b> Storage</li>
                <li class="price-menu-links"><b>{item.storage+" "}</b>emails</li>
                <li class="price-menu-links"><b>{item.storage+" "}</b>domains</li>
                <li class="price-menu-links"><b>Endless</b> Support</li>
                <li class="price-menu-links price-tag">${+" "+item.storage}</li>
                <li class="price-menu-links for-bg"><button className="price-btn">Sign Up</button></li>
            </ul>
        </div>
    }
return <div id="Price" className="price">
     <h3 className="heading">PRICING</h3>
    <p className="heading2">Choose a pricing plan that fits your needs.</p>
    <div className="price-cards">
        {price.map(show)}
    </div>
</div>
}
export default Price;