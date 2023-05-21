import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-container">
        <div className="app__footer-links">
          <div className="app__footer-links_pages">
            <p className="app__footer-links_pages-item">Terms and conditions</p>
            <Link to="/contact" className="app__footer-links_pages-item">
              Contact
            </Link>
            <Link to="/about" className="app__footer-links_pages-item">
              About
            </Link>
          </div>
          <div className="app__footer-links_social">
            <p className="app__footer-links_pages-item">Sellfy</p>
            <p className="app__footer-links_pages-item">Instagram</p>
            <p className="app__footer-links_pages-item">YouTube</p>
            <p className="app__footer-links_pages-item">Discord</p>
            <p className="app__footer-links_pages-item">Twitter</p>
            <p className="app__footer-links_pages-item">Facebook</p>
          </div>
        </div>
        <div className="app__footer-rights">
          <p>© 2023 RaceOne17. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
