import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="blob-bg"></div>
      <div className="blob-bg blob-2"></div>

      <Navbar />
      <main>
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
