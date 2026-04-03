// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent! (Demo purposes)');
  };

  return (
    <section id="contact" className="contact fade-in appear">
      <div className="section-heading">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-container glass-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required placeholder="John Doe" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="john@example.com" />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required placeholder="I'd love to collaborate on a project..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Whether you have an internship opportunity, a project idea, or just want to chat about tech, feel free to drop me a message.
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--accent-secondary)' }}>
            rhea.grencio@example.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
