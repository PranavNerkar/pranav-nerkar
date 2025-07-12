import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Led development of enterprise web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2022 - 2023",
      description: "Developed and maintained multiple client projects. Collaborated with design and product teams to deliver high-quality solutions.",
      technologies: ["React", "Express.js", "PostgreSQL", "Firebase", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Web Studio",
      period: "2021 - 2022",
      description: "Built responsive user interfaces and implemented modern frontend architectures. Worked with various frameworks and libraries.",
      technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2020 - 2021",
      description: "Started my journey in web development. Learned modern technologies and contributed to team projects.",
      technologies: ["JavaScript", "HTML", "CSS", "Git", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-primary mb-3">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 