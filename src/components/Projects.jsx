// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "School Monitoring System",
      desc: "A comprehensive platform to help track student progress, attendance, and streamline administrative tasks.",
      tags: ["React", "Node.js", "MySQL"],
      link: "https://github.com/Buenavistarm",
    },
    {
      title: "To-Do List",
      desc: "A clean and intuitive task management application to help users organize their daily activities effectively.",
      tags: ["React", "CSS3", "JavaScript"],
      link: "https://github.com/Buenavistarm",
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
