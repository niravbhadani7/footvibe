import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-item">
            <span>LET US HELP YOU</span>
            <a href="https://footvibe.vercel.app/">Contact Us</a>
            <a href="https://footvibe.vercel.app/">
              Frequently Asked Questions (FAQ)
            </a>
            <a href="https://footvibe.vercel.app/">Privacy Policy</a>
            <a href="https://footvibe.vercel.app/">
              Check or Return Order
            </a>
          </div>
          <div className="footer-item">
            <span>USEFUL LINKS</span>
            <a href="https://footvibe.vercel.app/">Terms and Conditions</a>
            <a href="https://footvibe.vercel.app/">
              Connect with us on WhatsApp
            </a>
            <a href="https://footvibe.vercel.app/">
              Request Bata Store On Wheels
            </a>
            <a href="https://footvibe.vercel.app/">
              Become Our Partner
            </a>
          </div>
          <div className="footer-item">
            <span>COMPANY</span>
            <a href="https://footvibe.vercel.app/">About FootVibe</a>
            <a href="https://footvibe.vercel.app/">FootVibe Worldwide</a>
            <a href="https://footvibe.vercel.app/">The FootVibe Company</a>
            <a href="https://footvibe.vercel.app/">Press Releases</a>
            <a href="https://footvibe.vercel.app/">
              Career Opportunities at FootVibe
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 FootVibe. All rights reserved.</p>
      </div>
    </footer>
  );
}
