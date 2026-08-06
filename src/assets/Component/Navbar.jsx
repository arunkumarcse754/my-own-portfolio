import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <img src="/images/logo.png" alt="Logo" />

        <h2>
          Arun <span>Kumar</span>
        </h2>

      </div>

      <nav>

        <ul>

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#education">Education</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </nav>

      <a href="/images/resume.pdf" download className="resume-btn">
        Resume
      </a>

    </header>
  );
}

export default Navbar;