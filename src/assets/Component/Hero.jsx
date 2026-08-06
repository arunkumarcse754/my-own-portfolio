import "./Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <h4>Hello, I'm</h4>

        <h1>
          Arun <span>Kumar</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          Trained Java Full Stack Developer with strong knowledge in
          Java, Spring Boot, React, MySQL and REST APIs.
          I enjoy building responsive, scalable and modern web applications.
        </p>

        <div className="hero-buttons">

       <a href="#contact" className="btn-primary">
    Hire Me
</a>

          <a href="/images/resume.pdf" download className="btn-secondary">
            <FaDownload />
            <span>Download CV</span>
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/arunkumarcse754?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

      <a
  href="https://www.linkedin.com/in/arunkumar754/"
  target="_blank"
  rel="noreferrer"
>
            <FaLinkedin />
          </a>

          <a href="mailto:arunkumarcse754@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="profile-circle">

          <img
            src="/icons/profile.png"
            alt="Profile"
            className="profile"
          />

          <img
            src="/icons/react.png"
            alt="React"
            className="tech react"
          />

          <img
            src="/icons/java.png"
            alt="Java"
            className="tech java"
          />

          <img
            src="/icons/spring.png"
            alt="Spring"
            className="tech spring"
          />

          <img
            src="/icons/mysql.png"
            alt="MySQL"
            className="tech mysql"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;