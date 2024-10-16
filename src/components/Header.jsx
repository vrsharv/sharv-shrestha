import React from 'react';
import './styles.css';
import logo from '../assets/images/Sharv Shrestha Logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">SHARV @ SHRESTHA</div>
            <nav>
                <a href='/ProductPage.html'>Products</a>
                <a href="./company.html">Company</a>
                <a href="./contact.html">Contact us</a>
            </nav>
            {/* Replace the "Get a demo" with the logo image */}
            <a href="/" className="logo-link">
                <img src={logo} alt="Company Logo" className="header-logo" />
            </a>
        </header>
    );
}

export default Header;
