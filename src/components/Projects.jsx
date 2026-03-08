export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-pad section-reveal">
      <h3 className="section-title">Projects</h3>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="card project-card">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="link-row">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
              <a href={project.code} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
