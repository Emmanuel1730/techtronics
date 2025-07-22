import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';

export default function Footer() {
    return(
        <section className="footer">
            <hr />
            <div className="footer-items">
                <a href="https://web.facebook.com/profile.php?id=61578252514231"><FontAwesomeIcon icon={faFacebook} className="icon"/></a>
                <FontAwesomeIcon icon={faTwitter} className="icon"/>
                <a href="http://wa.me/265897574499"><FontAwesomeIcon icon={faWhatsapp} className="icon"/></a>
                <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </div>
            <p>&copy; Techtronics Power Pro Solutions 2025 | All rights reserved</p>
        </section>
    )
}