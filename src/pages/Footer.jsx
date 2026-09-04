import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("csanyi.adam16@gmail.com");
      setCopyMessage("Copied to clipboard");
    } catch {
      setCopyMessage("Unsuccessful copy. Email: csanyi.adam16@gmail.com");
    }

    setTimeout(() => {
      setCopyMessage("");
    }, 2500);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>©{new Date().getFullYear()} Adam Csanyi. All rights reserved.</p>
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
            <a href="" onClick={handleCopyEmail}>Gmail</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
