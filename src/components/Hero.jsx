import React from 'react';
import './styles.css';
import tech_video from '../assets/videos/tech1.mp4'; 

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>DEFEND</h1>
                <h2>Across Boundaries</h2>
                <p>An advanced cybersecurity framework to proactively defend against emerging and unknown threats.</p>
                <div className="button-group">
                    <a href="./ProductPage.html" className="button is-alternate">Services we Provide</a>
                    <a href="./contact.html" className="button is-secondary">Ask Questions...</a>
                </div>
            </div>
            <video 
                src={tech_video} // Make sure this is correctly imported from your assets
                autoPlay 
                loop 
                muted 
                playsInline 
                className="background-video"
            >
                Your browser doesn't support the video tag.
            </video>

        </section>
    );
}

export default Hero;
