// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="hero fade-in appear">
      <div className="hero-inner-clean">
        {/* Left — Text Content */}
        <div className="hero-content-left">
          <h1 className="hero-title-main">
            Hello, I'm <br />
            <span>Rhea Marie Grencio</span>
          </h1>
          <p className="hero-description-clean">
            I'm a 3rd Year BSIT student and TikTok Affiliate Marketer. 
            I strive to build functional backends and clean user interfaces 
            through carefully crafted code and creative content strategies.
          </p>
          <div className="cta-group-clean">
            <a href="#contact" className="btn-clean-violet">Say Hello!</a>
            <a href="/resume.png" download className="btn-clean-outline">My Resume</a>
          </div>
        </div>

        {/* Right — Profile Photo */}
        <div className="hero-photo-container-clean">
          <div className="hero-photo-wrapper-rect">
            <img
              src="/profile.jpg"
              alt="Rhea Marie Grencio"
              className="hero-photo-rect"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
