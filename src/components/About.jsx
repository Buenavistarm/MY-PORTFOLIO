// src/components/About.jsx
import React from 'react';

const About = () => {
  const skills = [
    { name: "Python & Flask", icon: "🐍", desc: "Writing clean, maintainable backend logic, developing RESTful APIs, and managing server routing." },
    { name: "MySQL Database", icon: "💾", desc: "Designing normalized database schemas, executing complex queries, and optimizing relationships." },
    { name: "React & Next.js", icon: "⚛️", desc: "Building accessible structures, crafting reusable components, and reactive modern layouts." },
    { name: "JavaScript / TS", icon: "⚡", desc: "Implementing interactive features, handling asynchronous data fetching, and DOM logic." }
  ];

  return (
    <section id="about" className="about fade-in appear">
      <div className="section-heading">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-container">
        <div className="about-text glass-card">
          <h3>Software Developer & Problem Solver</h3>
          <p>
            I am Rhea Marie Grencio, a software developer with a strong focus on software engineering and web development. 
            My core interest revolves around creating efficient server-side architectures connecting with dynamic client interfaces.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Beyond building personal projects, I love participating in hackathons, contributing to open-source software, 
            and expanding my skill set. My goal is to build resilient full-stack solutions.
          </p>
        </div>
      </div>

      <div className="skills-grid" style={{ marginTop: '3rem' }}>
        {skills.map((skill, index) => (
          <div className="skill-card glass-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
