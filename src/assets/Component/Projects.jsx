import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {

  const projectData = [

    {
      image: "/images/project1.png",

      title: "Bank Management System",

      description:
        "A Full Stack CRUD application developed using React, Spring Boot and MySQL. Users can Create, Read, Update and Delete records with secure REST APIs.",

      tech: [
        "React",
        "Spring Boot",
        "MySQL",
        "REST API"
      ],

      github: "https://github.com/arunkumarcse754?tab=repositories",

      live: "https://arunkumarcse754-5180826.postman.co/home"
    },

    {
      image: "/images/project2.png",

      title: "Breast Cancer Prediction",

      description:
        "Deep Learning based breast cancer prediction using Histopathological Image Dataset with CNN achieving high classification accuracy.",

      tech: [
        "Python",
        "CNN",
        "TensorFlow",
        "OpenCV"
      ],

      github: "https://github.com/arunkumarcse754?tab=repositories",

      live: "http://127.0.0.1:5000"
    }

  ];

  return (

    <section className="projects" id="projects">

      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">

        {projectData.map((project, index) => (

          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />

        ))}

      </div>

    </section>

  );
}

export default Projects;