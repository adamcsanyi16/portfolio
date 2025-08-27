import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Adam Csanyi. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a
              href="https://github.com/adamcsanyi16"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adam-csanyi-b1b687261/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:csanyi.adam16@gmail.com">Gmail</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
