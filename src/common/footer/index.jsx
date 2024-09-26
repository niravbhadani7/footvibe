import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-socials">
          <div className="footer-logo">
            <h2>FootVibe</h2>
          </div>
          <div className="footer-socials-text">
            <span>follow us</span>
          </div>
          <div className="footer-socials-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-item">
            <h3>LET US HELP YOU</h3>

            <a href="https://footvibe.vercel.app/">Contact Us</a>
            <a href="https://footvibe.vercel.app/">
              Frequently Asked Questions (FAQ)
            </a>
            <a href="https://footvibe.vercel.app/">Privacy Policy</a>
            <a href="https://footvibe.vercel.app/">Check or Return Order</a>
          </div>
          <div className="footer-item">
            <h3>USEFUL LINKS</h3>
            <a href="https://footvibe.vercel.app/">About Us</a>
            <a href="https://footvibe.vercel.app/">Careers</a>
            <a href="https://footvibe.vercel.app/">Terms and Conditions</a>
            <a href="https://footvibe.vercel.app/">Shipping Information</a>
          </div>
          <div className="footer-item">
            <h3>COMPANY</h3>
            <a href="https://footvibe.vercel.app/">Our Story</a>
            <a href="https://footvibe.vercel.app/">Blog</a>
            <a href="https://footvibe.vercel.app/">Press</a>
            <a href="https://footvibe.vercel.app/">Investors</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 FootVibe. All rights reserved.</p>
      </div>
    </footer>
  );
}
