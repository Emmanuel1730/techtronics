import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'; 
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const contactIcons = [
        { Icon: faLocationDot, title: "Address", item: "Blantyre, Malawi"},
        { Icon: faEnvelope, title: "Email", item: "techtronics@gmail.com", link: "mailto:techtronics@gmail.com" },
        { Icon: faPhone, title: "Phone", item: "0 986 54 46 99", link: "tel:0986544699" },
        { Icon: faWhatsapp, title: "WhatsApp", item: "0 888 08 33 34", link: "http://wa.me/265888083334" },

    ];

    return (
        <>
            <section className="contacts">
                <h1>Contact us</h1>
                <div className="contact-wrapper">
                    <p>Have questions or need expert electrical services? Contact us.</p>
                    <div className="contact-item-container">
                        {contactIcons.map((data, index) => (
                            <div key={index} className='contact-item'>
                                <FontAwesomeIcon icon={data.Icon} className='cont-icon' />
                                <h3>{data.title}</h3>
                                {data.link ? (
                                    <a href={data.link} className="contact-link">{data.item}</a>
                                ) : (
                                    <p>{data.item}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <p>At Techtronics Engineering, your satisfaction is our priority.</p>
                    <p>We are here to help!</p>
                </div>
            </section>
        </>
    );
}
