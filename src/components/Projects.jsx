// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "GoTrike Ecosystem",
      desc: "A full-stack ride-hailing app for local tricycles. Features a driver/passenger dashboard and real-time mapping functionality.",
      tags: ["React", "Node.js", "MySQL"],
      link: "https://github.com",
    },
    {
      title: "Inventory Management Dashboard",
      desc: "A data-driven web app allowing businesses to manage their stock. Includes live charts and paginated tables.",
      tags: ["Python", "Flask", "MySQL", "JavaScript"],
      link: "https://github.com",
    },
    {
      title: "React Portfolio Mockup",
      desc: "A minimalist personal portfolio built closely focusing on UI/UX best practices, smooth animations, and glassmorphism styling.",
      tags: ["React", "CSS3", "Vite"],
      link: "https://github.com",
    }
  ];

  return (
    <section id="projects" className="projects fade-in appear">
      <div className="section-heading">
        <h2>Project Showcase</h2>
        <div className="underline"></div>
      </div>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="project-card glass-card" key={idx}>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="tags">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx}>{tag}</span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noreferrer" className="btn-text">
                View Source <span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
