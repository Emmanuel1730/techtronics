import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';

export default function Footer() {
    return(
        <section className="footer">
            <hr />
            <div className="footer-items">
                <a href="#"><FontAwesomeIcon icon={faFacebook} className="icon"/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} className="icon"/></a>
                <a href="http://wa.me/265897574499"><FontAwesomeIcon icon={faWhatsapp} className="icon"/></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
            </div>
            <p>&copy; Techtronics 2025 | All rights reserved</p>
        </section>
    )
}