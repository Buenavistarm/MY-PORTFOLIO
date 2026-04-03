// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="hero fade-in appear">
      <div className="hero-content">
        <p className="greeting">Hello World, I'm</p>
        <h1 className="glitch" data-text="Rhea Marie Grencio">Rhea Marie Grencio</h1>
        <p className="subtitle">
          I'm a software developer passionate about building functional backends and clean user interfaces. 
          Always learning and eager to build modern web solutions.
        </p>
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
