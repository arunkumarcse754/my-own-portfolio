import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaGitAlt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiHibernate
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">

        {/* Frontend */}

        <div className="skill-card">

          <h3>Frontend</h3>

          <div className="skill">
            <FaHtml5 className="icon html"/>
            <span>HTML5</span>
            <div className="progress">
              <div className="html-bar"></div>
            </div>
            <small>95%</small>
          </div>

          <div className="skill">
            <FaCss3Alt className="icon css"/>
            <span>CSS3</span>
            <div className="progress">
              <div className="css-bar"></div>
            </div>
            <small>90%</small>
          </div>

          <div className="skill">
            <FaJsSquare className="icon js"/>
            <span>JavaScript</span>
            <div className="progress">
              <div className="js-bar"></div>
            </div>
            <small>85%</small>
          </div>

          <div className="skill">
            <FaReact className="icon react"/>
            <span>React</span>
            <div className="progress">
              <div className="react-bar"></div>
            </div>
            <small>90%</small>
          </div>

        </div>

        {/* Backend */}

        <div className="skill-card">

          <h3>Backend</h3>

          <div className="skill">
            <FaJava className="icon java"/>
            <span>Java</span>
            <div className="progress">
              <div className="java-bar"></div>
            </div>
            <small>90%</small>
          </div>

          <div className="skill">
            <SiSpringboot className="icon spring"/>
            <span>Spring Boot</span>
            <div className="progress">
              <div className="spring-bar"></div>
            </div>
            <small>85%</small>
          </div>

          <div className="skill">
            <SiHibernate className="icon hibernate"/>
            <span>Hibernate</span>
            <div className="progress">
              <div className="hibernate-bar"></div>
            </div>
            <small>80%</small>
          </div>

          <div className="skill">
            <SiMysql className="icon mysql"/>
            <span>MySQL</span>
            <div className="progress">
              <div className="mysql-bar"></div>
            </div>
            <small>88%</small>
          </div>

        </div>

        {/* Tools */}

        <div className="skill-card">

          <h3>Tools</h3>

          <div className="tools">

            <div>
              <FaGitAlt />
              <p>Git</p>
            </div>

            <div>
              <SiPostman />
              <p>Postman</p>
            </div>

            <div>
              <FaReact />
              <p>React</p>
            </div>

            <div>
              <SiMysql />
              <p>MySQL</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;