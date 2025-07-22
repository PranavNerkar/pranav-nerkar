import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TestimonialAdmin from './components/TestimonialAdmin'; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
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
            </>
          } />
          <Route path="/testimonial" element={<TestimonialAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
