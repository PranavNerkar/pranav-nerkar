import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="text-center md:text-left">
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-primary to-blue-700 flex items-center justify-center mb-6">
                <span className="text-white text-6xl font-bold">PN</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Full Stack Developer
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate software developer with expertise in modern web technologies. 
                I love creating efficient, scalable solutions that provide exceptional user experiences.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in both frontend and backend development, 
                I specialize in React, Node.js, and cloud technologies. I'm always 
                eager to learn new technologies and take on challenging projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 