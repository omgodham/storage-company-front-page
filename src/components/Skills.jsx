import "./Skills.css";
function Skills(){
return <div className="Skills">
        <div className="skills-content">
            <div className="skills-left-content">
                <h1>Our Skills</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore</p>
            </div>
            <div className="skills-right-content">
               <i class="fi-xnsuxl-camera-solid"></i>
               <span>Photography</span>
               <div className="outer-div"><div className="inner-div ninety">90%</div></div>
                <i class="fi-xwluxl-computer-desktop-wide"></i>
                <span>Web Design</span>
                <div className="outer-div"><div className="inner-div eighty-five">85%</div></div>
                <i class="fi-xnsuxl-edit-solid"></i>
                <span>Photoshop</span>
                <div className="outer-div"><div className="inner-div seventy-five">75%</div></div>
            </div>
        </div>
       </div>
}
export default Skills;