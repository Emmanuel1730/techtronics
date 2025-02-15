import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'; 
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const contactIcons = [
        {Icon: faLocationDot, title: "Address", item: "Blantyre, Malawi"},
        {Icon: faPhone, title: "Phone", item: "0 986 544 699"},
        {Icon: faEnvelope, title: "Email", item: "techtronics@gmail.com"}
        
    ];
    return(
        <>
            <section className="contacts">
                <h1>Contact us</h1>
                <div className="contact-wrapper">
                    <p>have questions or need expert electrical services. contact us</p>
                    <div className="contact-item-container">
                            {contactIcons.map((data, index) => (
                                <div key={index} className='contact-item'>
                                    <FontAwesomeIcon icon={data.Icon} className='cont-icon'/>
                                    <h3>{data.title}</h3>
                                    <p>{data.item}</p>
                                </div>
                            ))}
                    </div>
                    <p>at Techronics engineering, your satisfaction is our priority</p>
                    <p>we are here to help!</p>
                </div>
            </section>
        </>
    )
}