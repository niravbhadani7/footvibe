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
            {[ 
              { href: "https://www.facebook.com", icon: "facebook-f", label: "Facebook" },
              { href: "https://www.instagram.com", icon: "instagram", label: "Instagram" },
              { href: "https://www.twitter.com", icon: "twitter", label: "Twitter" },
              { href: "https://www.linkedin.com", icon: "linkedin-in", label: "LinkedIn" },
              { href: "https://www.youtube.com", icon: "youtube", label: "YouTube" },
            ].map(({ href, icon, label }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon-link"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-container">
          {["LET US HELP YOU", "USEFUL LINKS", "COMPANY"].map((title, index) => (
            <div key={index} className="footer-item">
              <h3>{title}</h3>
              <ul>
                {index === 0 && (
                  <>
                    <li><a href="https://footvibe.vercel.app/">Contact Us</a></li>
                    <li><a href="https://footvibe.vercel.app/">Frequently Asked Questions (FAQ)</a></li>
                    <li><a href="https://footvibe.vercel.app/">Privacy Policy</a></li>
                    <li><a href="https://footvibe.vercel.app/">Check or Return Order</a></li>
                  </>
                )}
                {/* Add similar <li> elements for other footer items */}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 FootVibe. All rights reserved.</p>
      </div>
    </footer>
  );
}
