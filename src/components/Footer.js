import "./Footer.css";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function  Footer() {
    return <div className="footer">
            <a className="footer-btn" href="#home"><ArrowUpwardIcon className="footer-icon" /> <b>To the Top</b></a>
            <div className="footer-socials">
          <i class="fi-snsuxl-facebook"></i>
          <i class="fi-xnsuxl-instagram"></i>
          <i class="fi-xnsuxl-pinterest"></i>
          <i class="fi-xnsuxl-twitter"></i>
          <i class="fi-xnsuxl-linkedin"></i>
          <i class="fi-cnsuxl-snapshat-solid"></i>
      </div>
    </div>
}
export default Footer;