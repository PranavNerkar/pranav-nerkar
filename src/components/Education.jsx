import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      period: "2018 - 2022",
      description: "Graduated with honors. Specialized in software engineering and web development.",
      gpa: "3.8/4.0"
    },
    {
      degree: "Full Stack Web Development",
      institution: "Coding Bootcamp",
      period: "2021",
      description: "Intensive 6-month program covering modern web technologies and best practices.",
      gpa: "Certificate"
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-primary mb-3">
                  {edu.institution}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {edu.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 