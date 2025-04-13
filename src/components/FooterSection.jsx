import React from "react";
import "./FooterSection.css";

function FooterSection() {
  return (
    <div className="footer-section">
      <div className="newsletter">
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from metta muse.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="contact-us">
        <h3>CONTACT US</h3>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
      </div>
      <div className="currency">
        <h3>CURRENCY</h3>
        <div className="currency-select">
          <span className="flag">🇺🇸</span>
          <span>USD</span>
        </div>
        <p className="currency-info">
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
  );
}

export default FooterSection;
