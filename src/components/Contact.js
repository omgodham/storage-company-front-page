import "./Contact.css";
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
function Contact(){
        return <div className="contact" id="contact">
                  <h3 >CONTACT</h3>
        <p >Lets get in touch. Send us a message:</p>
        <div className="text-section">
        <h4><RoomIcon  className="contact-icons"/>Chicago,US</h4>
        <h4><PhoneIcon className="contact-icons" />Phone: +00 151515</h4>
        <h4><MailIcon  className="contact-icons"/>Email: mail@mail.com</h4>
        </div>
        <img src="https://www.w3schools.com/w3images/map.jpg" /> 
        </div>

}
export default Contact;