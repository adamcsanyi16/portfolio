import React, { useState } from "react";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="main">
      <section className="left">
        <div className="card">
          <img src=".\cvkep.png" alt="" className="img" />
          <span>About me</span>
          <p className="info">
            Hi! My name is Adam and I am starting my second year in the field of
            Computer Science at the University of Szeged. On this webpage, I
            have collected the projects, that I have worked on. Explore and
            contact me if you have any questions!
          </p>
          <div className="body">
            <div className="tabs">
              <input
                checked={activeTab === "skills"}
                onChange={() => setActiveTab("skills")}
                name="fav_language"
                id="skills"
                type="radio"
                className="input"
              />
              <label htmlFor="skills" className="label">
                Skills
              </label>
              <input
                checked={activeTab === "projects"}
                onChange={() => setActiveTab("projects")}
                name="fav_language"
                id="projects"
                type="radio"
                className="input"
              />
              <label htmlFor="projects" className="label">
                Projects
              </label>
              <input
                checked={activeTab === "contact"}
                onChange={() => setActiveTab("contact")}
                name="fav_language"
                id="contact"
                type="radio"
                className="input"
              />
              <label htmlFor="contact" className="label">
                Contact
              </label>
              <input
                checked={activeTab === "resume"}
                onChange={() => setActiveTab("resume")}
                name="fav_language"
                id="resume"
                type="radio"
                className="input"
              />
              <label htmlFor="resume" className="label">
                Resume
              </label>
            </div>
          </div>
        </div>
      </section>
      <section className="right">
        <div className="cardshadow">
          {activeTab === "skills" && (
            <div className="skills">
              <h1>My skills</h1>
              <ul className="tag">
                <li className="tag__name">Javascript</li>
                <li className="tag__name">CSS</li>
                <li className="tag__name">HTML</li>
                <li className="tag__name">React</li>
                <li className="tag__name">Vite</li>
                <li className="tag__name">NodeJS</li>
                <li className="tag__name">Express.js</li>
                <li className="tag__name">Java</li>
                <li className="tag__name">Python</li>
                <li className="tag__name">C#</li>
                <li className="tag__name">MongoDB</li>
                <li className="tag__name">MySQL</li>
                <li className="tag__name">Github/Gitlab</li>
              </ul>
            </div>
          )}
          {activeTab === "projects" && (
            <div className="projects">
              <h1>My Projects</h1>
              <div className="allprocards">
                <div className="procard">
                  <a href="http://novelnest.nhely.hu/">
                    <div className="procard_content">
                      <p className="procard_title">NovelNest</p>
                      <p className="procard_description">
                        This is a Full-Stack project made with React and NodeJS.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="procard">
                  <a href=".\Novel Nest.pdf" download>
                    <div className="procard_content">
                      <p className="procard_title">NovelNest</p>
                      <p className="procard_description">
                        You can download the documentation to this project.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
          {activeTab === "contact" && (
            <div className="contact">
              <h1>Feel free to contact me!</h1>
              <div className="contact-buttons">
                <a
                  href="https://github.com/adamcsanyi16"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn"
                >
                  <FaGithub className="contact-icon" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100006913516719"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn"
                >
                  <FaFacebook className="contact-icon" />
                  <span>Facebook</span>
                </a>
                <a
                  href="mailto:csanyi.adam16@gmail.com"
                  className="contact-btn"
                >
                  <FaEnvelope className="contact-icon" />
                  <span>Gmail</span>
                </a>
              </div>
            </div>
          )}
          {activeTab === "resume" && (
            <div className="resume">
              <h1>Download my resumes in english or hungarian!</h1>
              <a href=".\CV_AdamCsanyi.pdf" download className="button">
                <span>Download</span>
              </a>
              <a href=".\CV_CsányiÁdám.pdf" download className="button">
                <span>Letöltés</span>
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
