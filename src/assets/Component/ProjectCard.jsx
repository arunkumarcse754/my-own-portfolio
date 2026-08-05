import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  image,
  title,
  description,
  tech,
  github,
  live
}) {
  return (
    <div className="project-card">

      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tech-stack">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="project-buttons">

          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>

          <a href={live} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;