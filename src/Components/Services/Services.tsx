import { useState } from 'react';
import './Services.css';

function Services() {
    const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setEnlargedIndex(enlargedIndex === index ? null : index);
    };
    const serviceItems = [
        {
            name: "Installations",
            description: "New wiring, panel upgrades and lighting systems",
            image: "./assets/images/Fresh-installation.jpg"
        },
        {
            name: "Energy Solutions",
            description: "New wiring, panel upgrades and lighting systems",
            image: "./assets/images/rectifying faults.jpg"
        },
        {
            name: "Upgrades",
            description: "New wiring, panel upgrades and lighting systems",
            image: "./assets/images/services_1.jpg"
        },
        {
            name: "Maintanance",
            description: "New wiring, panel upgrades and lighting systems",
            image: "./assets/images/maintainance.jpg"
        },
        {
            name: "Repair",
            description: "New wiring, panel upgrades and lighting systems",
            image: "./assets/images/appliance-repair.jpg"
        }
    ]
    return (
        <>
        <section className="service-page">
            <div className="service-hero">
                <h1>Our Services</h1>
                <p>we provide the following services</p>
            </div>
            <div className="service-card-wrapper">
                {serviceItems.map((item, index) => (
                    <div className="service-image-card" key={index}>
                        <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className={enlargedIndex === index ? 'enlarged' : ''}
                            onClick={() => handleClick(index)}
                        />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            {/* Backdrop for enlarged image */}
            {enlargedIndex !== null && (
                <div
                    className="enlarged-backdrop"
                    onClick={() => setEnlargedIndex(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.3)',
                        zIndex: 9,
                        cursor: 'pointer',
                    }}
                />
            )}
        </section>
        </>
    )
}
export default Services;