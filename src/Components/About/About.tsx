import './About';

function About() {
    return(
        <>
            <div className="service-info-wrapper">
                <div className="service-info">
                <div className="info-img">
                    <img src="./assets/images/passion11.jpg" alt="service info" loading='lazy' />
                </div>
                <div className="info-text">
                    <div className="info">
                        <h2>Why we exist</h2>
                        <p>We’re here to help people and businesses unlock their full potential by delivering safe, reliable electrical solutions that make life simpler and more secure. We exist to empower people’s comfort and well-being through safe, reliable systems.</p>
                    </div>
                    <div className="info">
                        <h2>How we do it</h2>
                        <p>We combine skilled expertise, innovative technology, and a commitment to excellence. Our team is passionate about getting the job done right the first time, every time.</p>
                    </div>
                    <div className="info">
                        <h2>What we offer</h2>
                        <p>From new installations and upgrades to repairs and preventative maintenance, TECHTRONICS POWER PRO SOLUTIONS is your trusted partner for electrical services that power progress with confidence.</p>
                    </div>
                    <button className="get-in-touch-bt">Get In Touch</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default About;