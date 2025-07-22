import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'; 
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const contactIcons = [
        { Icon: faLocationDot, title: "Address", item: "Blantyre, Malawi"},
        { Icon: faEnvelope, title: "Email", item: "techtronicspowerpro@gmail.com", link: "mailto:techtronicspowerprosolutions@gmail.com" },
        { Icon: faPhone, title: "Phone", item: "0 994 00 21 38", link: "tel:0994002138" },
        { Icon: faWhatsapp, title: "WhatsApp", item: "0 888 08 33 34", link: "http://wa.me/265888083334" },

    ];

    return (
        <>
            <div className="contact-header">
                <h1>Contact us</h1>
                <p>Have questions or need expert electrical services? Contact us.</p>
                </div>
            <section className="contacts">
                <div className="contact-wrapper">
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
                </div>
            </section>
        </>
    );
}
