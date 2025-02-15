import './Home.css';
import Card from "../imports/Value-Card/Card";
import ServiceCard from "../imports/Service-Card/ServiceCard";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";

type FeedbackInputs = {
    email: string;
    message: string;
};

export default function Home() {

    const headlines = [
        { line1: "Bringing", line2: "Electrical Energy", line3: "Brilliance World Wide" },
        { line1: "Powering", line2: "the Future", line3: "with Excellence" },
        { line1: "Innovative", line2: "Electrical Solutions", line3: "for You" },
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
        }, 3000); // Change text every 3 seconds
    
        return () => clearInterval(interval);
      });

    const ServicesImages = [
        {
            image: './assets/images/services_1.jpg',
            title: 'Fresh House Electrical Installation'
        },
        {
            image: './assets/images/services_1.jpg',
            title: 'Fresh House Electrical Installation'
        },
        {
            image: './assets/images/services_1.jpg',
            title: 'Fresh House Electrical Installation'
        },
        {
            image: './assets/images/services_1.jpg',
            title: 'Fresh House Electrical Installation'
        },
    ]

    const{
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FeedbackInputs>();

    const onSubmit: SubmitHandler<FeedbackInputs> = (data) =>  {
        console.log("Message Submitted: ", data);
        alert("Thank you for Contacting us")
    }
    return(
        <>
            <main className="home">
                <section className="hero">
                    <div className="hero-text">
                        <h5>Techtronics Engineering</h5>
                        <h1 className={`slider-text ${isFading ? "fade-out" : "fade-in"}`}>
                            <span>{headlines[currentIndex].line1}</span>
                            <br />
                            <b>{headlines[currentIndex].line2}</b>
                            <br />
                            <span>{headlines[currentIndex].line3}</span>
                            </h1>
                        <button className="hero-button">Get Started</button>
                    </div>
                    <div className="hero-image">
                        <img src="./assets/images/heroimage.jpg" alt="" />
                    </div>
                </section>

                <section className="values-section">
                    <div className="v-card-container">
                    <Card
                            icon="🤝" 
                            title="Reliability"
                            description="We deliver dependable services you can trust."
                        />
                    <Card
                            icon="⚡"
                            title="Efficiency"
                            description="Fast and high-quality solutions for your needs."
                        />
                    <Card
                            icon="🎯"
                            title="Precision"
                            description="Accurate and effective execution every time."
                        />
                    </div>
                </section>
                <section className="home-details">
                    <div className="mission-statement">
                        <h2>Our Mission</h2>
                        <p>To make reliable services to our customers at a very affordable price with 
                        original materials offered</p>
                    </div>
                    <div className="services">
                        <h2>Services</h2>
                        <h4>Our Services for Clients</h4>
                        <div className="services-container">
                            
                            {ServicesImages.map((Serviceimage, index) => (
                                <ServiceCard key={index}
                                        image={ Serviceimage.image}
                                        title={Serviceimage.title}
                                    />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="a">
                    <div className="wrapper">
                        <div className="wrapper-image">
                            <img src="./assets/images/wrapper.jpg" alt="profession" />
                        </div>
                        <div className="wrapper-text">
                            <h1>Why Choose Us?</h1>
                            <h2>Unmatched Professionalism and quality</h2>
                            <p>We deliver top-tier electrical and air condition solution with a commitment to excellency, ensuring every project is handled wih precision, safety and care</p>
                        </div>
                    </div>
                </section>
                <section className="b">
                    <div className="passion-wrapper">
                        <div className="p-first-img-wrapper">
                            <img src="/assets/images/passion1.jpg" alt="passionimage" />
                        </div>
                        <div className="p-second-part-wrapper">
                            <div className="upper">
                                <div className="u-left">
                                    <img src="/assets/images/passion2.jpg" alt="passionimage" />
                                </div>
                                <div className="u-right">
                                    <h2>Our Passion for What we do</h2>
                                    <p>Fuels our Commitment to Excellency, making us the Best in our Field</p>
                                </div>
                            </div>
                            <div className="lower">
                                <img src="/assets/images/passion3.jpg" alt="passionimage" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about">
                    <div className="about-container">
                        
                        <div className="about-image">
                            <img src="/assets/images/about.jpg" alt="about" />
                        </div>

                        <div className="about-text">
                            <h2>About</h2>
                            <p>we specialize in providing reliable, efficient and innovative solutions for your electrical and cooling needs. With a team of skilled professionals we pride our selves in delivering seamless services and enhance comfort, safety and energy efficiency for both residential and commercial  spaces</p>
                        </div>
                    </div>
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