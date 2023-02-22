import React from "react";

const Footer = () => {
  return (
    <>
      <ul className="footer__column">
        <li>Your Company</li>
        <li>
          Our mission is to make gadjet purchase, accessible and affordable.
        </li>
      </ul>
      <ul className="footer__column">
        <li>HelpFul Links</li>
        <li>Home</li>
        <li>About Us</li>
        <li>Marketplace</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
      <ul className="footer__column">
        <li>Site Map</li>
        <li>Our Mobile App</li>
        <li>Frequently Asked Questions</li>
        <li>Help Desk</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
      <ul className="footer__column">
        <li>Contact Us</li>
        <li className="footer__socialmedia">
          <div className="scial__icons">
            <img src="Vector (3).png" alt="social_icon" />
          </div>
          <div className="scial__icons">
            <img src="Vector (4).png" alt="social_icon" />
          </div>
          <div className="scial__icons">
            <img src="Vector (5).png" alt="social_icon" />
          </div>
          <div className="scial__icons">
            <img src="Vector (6).png" alt="social_icon" />
          </div>
        </li>
        <li>hello@yourcompany.com</li>
      </ul>
    </>
  );
};

export default Footer;
