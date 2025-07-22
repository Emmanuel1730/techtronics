import './Home.css';
import Card from "../imports/Value-Card/Card";
import ServiceCard from "../imports/Service-Card/ServiceCard";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faHandshake, faLightbulb, faShieldHalved, faSmile } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../imports/infoCard/InfoCard';

type FeedbackInputs = {
    email: string;
    message: string;
};

export default function Home() {

    const headlines = [
        { line1: "Powered", line2: "By Purpose", line3: "Wired For Trust" },
        { line1: "Bringing", line2: "Electrical Energy", line3: "Brilliance World Wide" },
        { line1: "Powering", line2: "The Future", line3: "With Excellence" },
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsFading(true);
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
            setIsFading(false);
          }, 500); // Fade-out before switching
        }, 5000); // Change text every 3 seconds
    
        return () => clearInterval(interval);
      });

    const ServicesImages = [
        {
            image: './assets/images/Fresh-installation.jpg',
            title: 'Installations',
            description: 'New wiring, panel upgrades, lighting systems',
            reverse: false
        },
        {
            image: './assets/images/rectifying faults.jpg',
            title: 'Upgrades',
            description: 'Modernization and capacity enhancements',
            reverse: true
        },
        {
            image: './assets/images/maintainance.jpg',
            title: 'Maintainance',
            description: 'Routine inspections and compliance checks',
            reverse: false
        },
        {
            image: './assets/images/appliance-repair.jpg',
            title: 'Repair',
            description: 'Fast, dependable troubleshooting and fixes',
            reverse: true
        },
    ]

    const infoCardItems = [
        {img: './assets/images/info4.jpg', name: 'Why we exist', description: 'We are here to help people and businesses unlock their full potential by delivering safe, reliable electrical solutions that make life simpler and more secure. We exist to empower people`s comfort and well-being through safe, reliable systems.', reverse: false},
        {img: './assets/images/info2.jpg', name: 'How we do it', description: 'We combine skilled expertise, innovative technology, and a commitment to excellence. Our team is passionate about getting the job done right the first time, every time.', reverse: true},
        {img: './assets/images/info3.jpg', name: 'What we offer', description: 'From new installations and upgrades to repairs and preventative maintenance, TECHTRONICS POWER PRO SOLUTIONS is your trusted partner for electrical services that power progress with confidence..', reverse: false}
    ]

    const{
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FeedbackInputs>();

    const onSubmit = (data: { email: string; message: string }) => {
        window.location.href = `mailto:techtronics@gmail.com?subject=Contact%20Form%20Inquiry&body=From: ${data.email}%0D%0A%0D%0A${data.message}`;
    };
    
    return(
        <>
            <main className="home">
                <section className="hero">
                    <div className="hero-text">
                        <h5>Techtronics Power Pro Solutions</h5>
                        <h1 className={`slider-text ${isFading ? "fade-out" : "fade-in"}`}>
                            <span>{headlines[currentIndex].line1}</span>
                            <br />
                            <b>{headlines[currentIndex].line2}</b>
                            <br />
                            <span>{headlines[currentIndex].line3}</span>
                            </h1>
                        <button className="hero-button"><NavLink to='/contacts'>Get Started</NavLink></button>
                    </div>
                    <div className="hero-image">
                        <img src="./assets/images/heroimage.jpg" alt="" />
                    </div>
                </section>

                <section className="values-section">
                    <div className="v-card-container">
                    <Card
                            Icon={<FontAwesomeIcon icon={faHammer} />}
                            title="Quality & Craftsmanship"
                        />
                    <Card
                            Icon={<FontAwesomeIcon icon={faShieldHalved} />}
                            title="Safety First"
                        />
                    <Card
                            Icon={<FontAwesomeIcon icon={faHandshake} />}
                            title="Integrity & Transparency"
                        />
                    <Card
                            Icon={<FontAwesomeIcon icon={faLightbulb} />}
                            title="Iinnovation & Continous Improvement"
                        />
                    <Card
                            Icon={<FontAwesomeIcon icon={faSmile} />}
                            title="Customer Satisfaction"
                        />
                    
                    </div>
                </section>
                <section className="home-details">
                    <div className="mission-sec">
                        <div className="mission-statement">
                        <h2>Our Mission</h2>
                        <p>To deliver trusted electrical and air conditioning solutions that empower our clients to live and work in safe, comfortable environments—combining expert craftsmanship, integrity, and innovation in everything we do.</p>
                    </div>
                    <div className="mission-statement">
                        <h2>Our Vision</h2>
                        <p>To become most trusted name in home and industrial power solutions—where reliability, innovation, and integrity light the way</p>
                    </div>
                    </div>
                    <div className="services">
                        <h2>Services</h2>
                        <h4>Our Services for Clients</h4>
                        <div className="services-container">
                            
                            {ServicesImages.map((Serviceimage, index) => (
                                <ServiceCard key={index}
                                        image={ Serviceimage.image}
                                        title={Serviceimage.title}
                                        description={Serviceimage.description}
                                        reverse={Serviceimage.reverse}
                                    />
                            ))}
                        </div>
                        <button className='service-btn'><NavLink to='services'>See More</NavLink></button>
                    </div>
                </section>
                <section className="a">
                    <div className="wrapper">
                        <div className="wrapper-image">
                            <img src="./assets/images/why-us.jpg" alt="profession" />
                        </div>
                        <div className="wrapper-text">
                            <h1>Why Choose Us?</h1>
                            <p className="why-span">✅ Qualified and Certified electricians</p>
                            <p className="why-span">✅ Timely Project delivery</p>
                            <p className="why-span">✅ Clear communication every step of the way</p>
                            <p className="why-span">✅ Competitive pricing without compromising Quality</p>
                            <p>We’re not just fixing wires or installing air conditioners. We're giving homes and businesses comfort, safety, and confidence through reliable electrical solutions.We believe that safe, reliable power and climate control should be accessible to everyone, improving comfort, productivity, and peace of mind.</p>
                        </div>
                    </div>
                </section>
                <section id="info-section">
                    {infoCardItems.map((item, index) => (
                        <InfoCard
                            key={index}
                            title={item.name}
                            image={item.img}
                            description={item.description}
                            reverse={item.reverse}
                            />
                    ))}
                </section>

                <section className="feedback">
                    <div className="feedback-container">
                            <h2>GET IN TOUCH</h2>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="email" {...register("email", {required: "Email is requiredd"})} placeholder="Email" />
                                    {errors.email && <p className="error">{errors.email.message}</p>}
                                </div>

                                <div className="form-group">
                                    <textarea {...register("message", {required: "Message cannot be empty"})} placeholder="Message"/>
                                    {errors.message && <p className="error">{errors.message.message}</p>}
                                </div>

                                <button type="submit" className="submit-btn">Send</button>
                            </form>
                    </div>
                </section>
                
            </main>
        </>
    )
}