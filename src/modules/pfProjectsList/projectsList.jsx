import "./projectsList.css";
import { useState, useEffect } from "react";
import ProjectCard from "./projectCard";
import projectsData from "./projects.json";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Les projets sont chargés directement depuis le JSON
    setProjects(projectsData.projects);
  }, []);

  return (
    <section id="projects" className="projects-list-container">
      <h2 className="section-title">$ My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
