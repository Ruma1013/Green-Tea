import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import footer_img from '../Assets/Footer.png'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src= {footer_img} alt="Green Tea Logo" className="footer-logo" />
        <div className="footer-text">
          <h2>GREEN TEA</h2>
          <p>123 GreenLeaf Lane, Tea Town.</p>
        </div>
      </div>
      <div className="footer-right">
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#products">Product</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-social">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
        <p className="footer-copy">&copy; 2024 GreenLeaf Tea. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
