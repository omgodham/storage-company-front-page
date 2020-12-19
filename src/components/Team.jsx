import "./Team.css";
import team from "./team.js";

function Team() {
    function show(item) {
        return <div className="card">
        <img src={item.img}></img>
        <h2>{item.name}</h2>
        <h3>{item.role}</h3>
        <p>{item.descr}</p>
        <button className="contact-btn"><i class="fi-xwsuxl-envelope-solid"></i>Contact</button>
        </div>
    }
return <div id="Team" className="team">
        <h3 className="heading">THE TEAM</h3>
        <p className="heading2">The ones who runs this company</p>
        <div className="cards">
            {team.map(show)}
      
        </div>
        </div>      
    
}
export default Team;