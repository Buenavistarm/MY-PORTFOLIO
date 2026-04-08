// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending message...");
    
    // We get the data perfectly formulated from the form inputs
    const formData = new FormData(event.target);

    try {
      // Sending it directly to your brand new Formspree endpoint silently!
      const response = await fetch("https://formspree.io/f/xlgoovkg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        event.target.reset();
      } else {
        // Formspree provides its own error messages if something goes wrong
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setStatus(data["errors"].map(error => error["message"]).join(", "));
        } else {
          setStatus("Failed to send message. Please try again.");
        }
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact fade-in appear">
      <div className="section-heading">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-container glass-card">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="John Doe" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="john@example.com" />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="I'd love to collaborate on a project..."></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          
          {status && (
            <p style={{ marginTop: '1rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
              {status}
            </p>
          )}
        </form>

        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Whether you have an internship opportunity, a project idea, or just want to chat about tech, feel free to drop me a message.
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--accent-secondary)' }}>
            <a href="mailto:rheamariegrencio@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>rheamariegrencio@gmail.com</a>
          </p>
          <p style={{ marginTop: '0.5rem', color: 'var(--accent-secondary)' }}>
            <a href="https://www.linkedin.com/in/rhea-marie-grencio-02458a34a" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              LinkedIn: Rhea Marie Grencio
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
