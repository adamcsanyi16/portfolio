import React, { useState } from "react";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [projectIndex, setProjectIndex] = useState(0);
  const [copyMessage, setCopyMessage] = useState("");

  const projects = [
    {
      title: "VédőÜgyvéd",
      description:
        "An agile-developed project in university. Programming practice site.",
      href: "https://ugyved-57a51.web.app/login",
      download: false,
    },
    {
      title: "Pontrendszer",
      description: "A point managing system for a football club named Algyő SK",
      href: "https://algyopontok.web.app/",
      download: false,
    },
    {
      title: "FiberRangers",
      description: "Optical and security system installation company",
      href: "https://www.fiberrangers.hu/",
      download: false,
    },
    {
      title: "Ipolykapu Kemping",
      description: "A camping site located in Szob.",
      href: "https://www.ipolykapu.hu/",
      download: false,
    },
  ];

  const handleNextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

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
                <li className="tag__name">Typescript</li>
                <li className="tag__name">HTML</li>
                <li className="tag__name">CSS</li>
                <li className="tag__name">React</li>
                <li className="tag__name">Vite</li>
                <li className="tag__name">NodeJS</li>
                <li className="tag__name">Express.js</li>
                <li className="tag__name">Python</li>
                <li className="tag__name">FastAPI</li>
                <li className="tag__name">PostgreSQL</li>
                <li className="tag__name">MongoDB</li>
                <li className="tag__name">Supabase</li>
                <li className="tag__name">Git</li>
                <li className="tag__name">Wordpress</li>
              </ul>
            </div>
          )}
          {activeTab === "projects" && (
            <div className="projects">
              <h1>My Projects</h1>
              <div className="project-slider">
                <button
                  type="button"
                  className="slider-btn"
                  onClick={handlePrevProject}
                  aria-label="Previous project"
                >
                  &#10094;
                </button>
                <div className="allprocards">
                  <div className="procard">
                    <a
                      href={projects[projectIndex].href}
                      download={projects[projectIndex].download}
                    >
                      <div className="procard_content">
                        <p className="procard_title">
                          {projects[projectIndex].title}
                        </p>
                        <p className="procard_description">
                          {projects[projectIndex].description}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="slider-btn"
                  onClick={handleNextProject}
                  aria-label="Next project"
                >
                  &#10095;
                </button>
              </div>
              <p className="project-counter">
                {projectIndex + 1} / {projects.length}
              </p>
              <div className="slider-dots" aria-hidden="true">
                {projects.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${projectIndex === index ? "active" : ""}`}
                  />
                ))}
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

                <button
                  type="button"
                  className="contact-btn contact-btn-copy"
                  onClick={handleCopyEmail}
                >
                  <FaEnvelope className="contact-icon" />
                  <span>Copy email</span>
                </button>
              </div>
              {copyMessage && <p className="copy-message">{copyMessage}</p>}
            </div>
          )}
          {activeTab === "resume" && (
            <div className="resume">
              <h1>Download my resume in hungarian!</h1>
              <a href="./CV_CsanyiAdamInfo.pdf" download className="button">
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
