import "./Education.css";

import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

import { HiChartBar } from "react-icons/hi";

function Education() {
  return (
    <section className="education" id="education">

      <h2 className="education-title">
        My <span>Education</span>
      </h2>

      <div className="timeline">

        {/* B.E */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">

            <h3>Bachelor's Degree</h3>

            <h4>B.E Computer Science Engineering</h4>

            <p>J.J College of Engineering & Technology</p>

            <p>
              <FaMapMarkerAlt className="icon" />
              Trichy
            </p>

            <p>
              <FaCalendarAlt className="icon" />
              2021 - 2025
            </p>

            <p>
              <FaStar className="icon" />
              CGPA : 8.04
            </p>

          </div>

        </div>

        {/* HSC */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaSchool />
          </div>

          <div className="timeline-content">

            <h3>Higher Secondary (12th)</h3>

            <h4>SION Higher Secondary School</h4>

            <p>
              <FaMapMarkerAlt className="icon" />
              Cuddalore
            </p>

            <p>
              <FaCalendarAlt className="icon" />
              2020 - 2021
            </p>

            <p>
              <HiChartBar className="icon" />
              Percentage : 75%
            </p>

          </div>

        </div>

        {/* SSLC */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaSchool />
          </div>

          <div className="timeline-content">

            <h3>SSLC (10th)</h3>

            <h4>Sion Higher Secondary School</h4>

            <p>
              <FaMapMarkerAlt className="icon" />
              Cuddalore
            </p>

            <p>
              <FaCalendarAlt className="icon" />
              2018 - 2019
            </p>

            <p>
              <HiChartBar className="icon" />
              Percentage : 65%
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;