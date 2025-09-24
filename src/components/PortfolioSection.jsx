import React from "react";

const PortfolioSection = ({ projects }) => {
  return (
    <section id="portfolio" className="newspaper-section">
      {/* Page number and section marker */}
      <div className="page-marker">
        <span className="page-number">B2</span>
        <span className="section-name">TECHNOLOGY | BUSINESS</span>
      </div>

      <h1 className="page-headline">Technology Portfolio</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-article">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-status">{project.status}</div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>

              <div className="project-description">{project.description}</div>

              <div className="project-tech">
                <strong>Technology Stack:</strong>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
