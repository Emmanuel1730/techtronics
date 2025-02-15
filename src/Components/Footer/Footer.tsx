import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';

export default function Footer() {
    return(
        <section className="footer">
            <hr />
            <div className="footer-items">
                <FontAwesomeIcon icon={faFacebook} className="icon"/>
                <FontAwesomeIcon icon={faTwitter} className="icon"/>
                <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
                <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </div>
            <p>&copy; Techtronics 2025 | All rights reserved</p>
        </section>
    )
}