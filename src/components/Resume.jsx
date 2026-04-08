import React from 'react';

const Resume = () => {
  const programmingSkills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "💾" },
    { name: "Git", icon: "🛠️" }
  ];

  return (
    <section id="resume" className="resume fade-in appear">
      <div className="section-heading">
        <h2>Skills & Resume</h2>
        <div className="underline"></div>
      </div>

      {/* Programming Skills Section */}
      <div className="resume-skills-grid">
        {programmingSkills.map((skill, index) => (
          <div className="simple-skill-card glass-card" key={index}>
            <span>{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      
      <div className="resume-layout">
        <div className="resume-viewer-left">
          <div className="resume-viewer glass-card">
            <img 
              src="/resume.png" 
              alt="Rhea Marie Grencio Resume" 
              className="resume-img-small" 
            />
          </div>
          <div className="resume-actions">
            <a href="/resume.png" download="Rhea_Marie_Grencio_Resume.png" className="btn btn-primary">
              Download Full Resume
            </a>
          </div>
        </div>
        
        <div className="resume-summary-right">
          <div className="glass-card">
            <h3>Quick Summary</h3>
            <p>3rd Year BSIT Student passionate about digital marketing and web technologies. Experienced in content creation and online audience interaction.</p>
            <ul className="resume-bullet-list">
              <li><strong>TikTok Affiliate Marketer</strong>: Freelance content production and brand promotion.</li>
              <li><strong>University of Abra</strong>: Pursuing Bachelor of Science in Information Technology.</li>
              <li><strong>Social Media Expert</strong>: Proficient in TikTok, Instagram, and Facebook engagement.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
