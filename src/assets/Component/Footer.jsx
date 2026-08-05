import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>Arun Kumar</h2>

          <p>
            Java Full Stack Developer passionate about building
            modern, scalable and responsive web applications.
          </p>

        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-right">

          <h3>Follow Me</h3>

          <div className="footer-icons">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <div className="copyright">

        <p>
          © 2026 Arun Kumar | Java Full Stack Developer
        </p>

      </div>

      <button
        className="scroll-top"
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;