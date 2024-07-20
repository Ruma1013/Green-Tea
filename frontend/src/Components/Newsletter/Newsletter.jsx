import React from 'react';
import './Newsletter.css'; // Import the CSS file for styling

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Newsletter</h2>
        <p>Join our newsletter for updates, offers, and tea tips!</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
