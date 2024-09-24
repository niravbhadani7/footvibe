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
            <a href="#footvibe.vercel.app" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#footvibe.vercel.app" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#footvibe.vercel.app" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#footvibe.vercel.app" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#footvibe.vercel.app" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-item">
            <span>LET US HELP YOU</span>
            <a href="#footvibe.vercel.app">Contact Us</a>
            <a href="#footvibe.vercel.app">FAQ</a>
            <a href="#footvibe.vercel.app">Privacy Policy</a>
            <a href="#footvibe.vercel.app">Check / Return Order</a>
          </div>
          <div className="footer-item">
            <span>USEFUL LINKS</span>
            <a href="#footvibe.vercel.app">Terms and Conditions</a>
            <a href="#footvibe.vercel.app">Connect with us on WhatsApp</a>
            <a href="#footvibe.vercel.app">Invite Bata Store On Wheels</a>
            <a href="#footvibe.vercel.app">Become Our Partner</a>
          </div>
          <div className="footer-item">
            <span>COMPANY</span>
            <a href="#">About Us</a>
            <a href="#">BATA Worldwide</a>
            <a href="#">The Footvibe Company</a>
            <a href="#">Press Release</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Footvibe. All rights reserved.</p>
      </div>
    </footer>
  );
}
