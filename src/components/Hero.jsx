import React, { useState, useEffect } from 'react';
import profilePhoto from '../assets/profile-photo.jpeg';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Pranav Nerkar',
    'Salesforce Consultant',
    'Software Developer'
  ];

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Wait 2 seconds before deleting
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-blue-700 flex items-center justify-center overflow-hidden shadow-lg">
            {/* Your actual photo from assets */}
            <img 
              src={profilePhoto} 
              alt="Pranav Nerkar"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to "N" if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback "N" - will show if image fails to load */}
            <span className="text-white text-4xl font-bold hidden">PN</span>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-primary relative">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
            Full Stack Developer & Software Engineer
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build modern Salesforce and web applications with cutting-edge technologies. 
            Passionate about creating user-friendly solutions that solve real-world problems.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-lg px-8 py-3"
            >
              View My Work
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-lg px-8 py-3"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/PranavNerkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              title="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/pranav-nerkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              title="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="mailto:pranavnerkar321@gmail.com"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              title="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <a
              href="https://leetcode.com/u/pranav_nerkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              title="LeetCode"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 14.355c0-.742-.564-1.346-1.274-1.416L17.726 13c-.783 0-1.434.484-1.611 1.192-.242.924-.373 1.901-.373 2.908 0 .742.564 1.346 1.274 1.416L20.726 19c.783 0 1.434-.484 1.611-1.192.242-.924.373-1.901.373-2.908zM11.274 13c-.783 0-1.434.484-1.611 1.192-.242.924-.373 1.901-.373 2.908 0 .742.564 1.346 1.274 1.416L14.726 19c.783 0 1.434-.484 1.611-1.192.242-.924.373-1.901.373-2.908 0-.742-.564-1.346-1.274-1.416L11.274 13zM2.726 13c-.783 0-1.434.484-1.611 1.192-.242.924-.373 1.901-.373 2.908 0 .742.564 1.346 1.274 1.416L5.726 19c.783 0 1.434-.484 1.611-1.192.242-.924.373-1.901.373-2.908 0-.742-.564-1.346-1.274-1.416L2.726 13z"/>
              </svg>
            </a>

            <a
              href="https://wa.me/918605146518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              title="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.11 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.23 1.4 1.4-4.23-.23-.39A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.24 1.23.38 1.65.49.69.18 1.32.15 1.82.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
              </svg>
            </a>

            <a
              href="tel:+918605146518"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              title="Phone"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-1.1 1.1a16.001 16.001 0 006.36 6.36l1.1-1.1a2 2 0 011.95-.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 