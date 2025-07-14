import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
