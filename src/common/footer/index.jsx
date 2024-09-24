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
            <a target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-item">
            <span>LET US HELP YOU</span>
            <a>Contact Us</a>
            <a>FAQ</a>
            <a>Privacy Policy</a>
            <a>Check / Return Order</a>
          </div>
          <div className="footer-item">
            <span>USEFUL LINKS</span>
            <a>Terms and Conditions</a>
            <a>Connect with us on WhatsApp</a>
            <a>Invite Bata Store On Wheels</a>
            <a>Become Our Partner</a>
          </div>
          <div className="footer-item">
            <span>COMPANY</span>
            <a>About Us</a>
            <a>BATA Worldwide</a>
            <a>The Footvibe Company</a>
            <a>Press Release</a>
            <a>Careers</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Footvibe. All rights reserved.</p>
      </div>
    </footer>
  );
}
