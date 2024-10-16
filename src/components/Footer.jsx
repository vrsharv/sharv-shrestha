import React from 'react';
import './styles.css';
import insta_image from '../assets/images/insta.png';
import facebook_image from '../assets/images/facebook.png';
import twitter_image from '../assets/images/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Sharv Shrestha</h3>
                    <p>We provide cutting-edge solutions to secure your digital infrastructure.</p>
                </div>
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Platform</a></li>
                        <li><a href="./ProductPage.html">Products</a></li>
                        <li><a href="./terms.html">Terms and Conditions</a></li>
                        <li><a href="./company.html">Company</a></li>
                        <li><a href="./contact.html">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer-section contact-info">
                    <h3>Contact Info</h3>
                    <p>Email: sharvsrestha@gmail.com</p>
                    <p>Phone: +91-9506919494</p>
                    <div className="socials">
                        
                        <a href="https://www.instagram.com/sharvshrestha?igsh=Z3F1c2FtdnNlbWk1"><img src={insta_image} alt="Instagram" /></a>
                        
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Sharv Shrestha. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
