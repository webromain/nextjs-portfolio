import "./projectsList.css";
import ProjectCard from "./projectCard";
import projectsData from "./projects.json";

export default function ProjectsList() {
  return (
    <section id="projects" className="projects-list-container">
      <h2 className="section-title">$ My Projects</h2>
      <div className="projects-grid">
        {projectsData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
