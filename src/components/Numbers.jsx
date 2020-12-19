import React from "react";
import numbers from "./numbers.js"
import "./Numbers.css"
function Numbers() {
    function show(item){
        return <div className="numbers">
        <h1>{item.num}</h1>
        <p>{item.desc}</p>
        </div>
    }
    return <div className="clients">
    {numbers.map(show)}
    </div>
}
export default Numbers;