
import "./Online.css";

import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";



function Online() {
  return (
    <section className="online" id="online">

      <h2 className="section-title">
        Find Me <span>Online</span>
      </h2>

      <p className="online-text">
        Connect with me through these platforms.
      </p>

      <div className="online-container">

        <a
          href="https://github.com/arunkumarcse754?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="online-card"
        >
          <FaGithub />
          <h3>GitHub</h3>
          <span>View My Projects</span>
        </a>

        <a
          href="https://www.linkedin.com/in/arunkumar754/"
          target="_blank"
          rel="noreferrer"
          className="online-card"
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <span>Professional Profile</span>
        </a>

        <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noreferrer"
          className="online-card"
        >
          <SiLeetcode />
          <h3>LeetCode</h3>
          <span>Problem Solving</span>
        </a>

        <a
          href="https://hackerrank.com/"
          target="_blank"
          rel="noreferrer"
          className="online-card"
        >
          <FaHackerrank />
          <h3>HackerRank</h3>
          <span>Certificates</span>
        </a>

        <a
          href="mailto:arunkumarcse754@gmail.com"
          className="online-card"
        >
          <FaEnvelope />
          <h3>Email</h3>
          <span>arunkumarcse754@gmail.com</span>
        </a>

        <a
          href="tel:+918270828493"
          className="online-card"
        >
          <FaPhoneAlt />
          <h3>Phone</h3>
          <span>+91 8270828493</span>
        </a>

<a
  href="https://www.naukri.com/mnjuser/profile"
  target="_blank"
  rel="noreferrer"
  className="online-card"
>
  <FaBriefcase />
  <h3>Naukri</h3>
  <span>View My Profile</span>
</a>







      </div>

    </section>
  );
}

export default Online;