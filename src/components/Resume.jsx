import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume fade-in appear">
      <div className="section-heading">
        <h2>My Resume</h2>
        <div className="underline"></div>
      </div>
      
      <div className="resume-container glass-card">
        <div className="resume-viewer">
          <img 
            src="/resume.png" 
            alt="Rhea Marie Grencio Resume" 
            className="resume-img" 
          />
        </div>
        <div className="resume-actions">
          <a href="/resume.png" download="Rhea_Marie_Grencio_Resume.png" className="btn btn-primary">
            Download PDF / Image
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
