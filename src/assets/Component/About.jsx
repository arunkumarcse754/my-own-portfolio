import "./About.css";

import {
  FaUser,
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="about-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">

        {/* Left Side */}

        <div className="about-content">

          <h3>Java Full Stack Developer</h3>

          <p>
            I am a passionate Java Full Stack Developer with strong
            knowledge in Java, Spring Boot, React, MySQL, HTML, CSS and
            JavaScript. I enjoy creating modern, responsive and
            user-friendly web applications while continuously learning
            new technologies to improve my development skills.
          </p>

          <div className="about-info">

            <div className="info-box">
              <FaUser className="icon" />
              <div>
                <h4>Name</h4>
                <span>Arun Kumar</span>
              </div>
            </div>

            <div className="info-box">
              <FaGraduationCap className="icon" />
              <div>
                <h4>Degree</h4>
                <span>B.E Computer Science Engineering</span>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <span>arunkumarcse754@gmail.com</span>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <span>Cuddalore, Tamil Nadu</span>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <span>8270828493</span>
              </div>
            </div>

          </div>

          <a href="/images/resume.pdf" download className="about-btn">
            <FaDownload />
            <span>Download Resume</span>
          </a>

        </div>

        {/* Right Side */}

        <div className="about-image">

          <img
            src="/images/about-image.png"
            alt="About"
          />

        </div>

      </div>

    </section>
  );
}

export default About;