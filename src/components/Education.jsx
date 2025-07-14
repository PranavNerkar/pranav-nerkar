import React from 'react';

const Education = () => {
  // Dynamic education data - add new education here
  const education = [
    {
      id: 1,
      degree: "Diploma in Advanced Computing",
      period: "2023-24",
      university: "CDAC Pune",
      description: "Specialized training in advanced computing technologies including software development, database management, and modern programming practices"
    },
    {
      id: 2,
      degree: "Bachelors in Electronics and Telecommunication Engineering",
      period: "2019-23",
      university: "Savitribai Phule Pune University",
      description: "Comprehensive study of electronics, telecommunications, signal processing, and communication systems with practical laboratory experience"
    },
    {
      id: 3,
      degree: "HSC",
      period: "2018-19",
      university: "Maharashtra State Board",
      description: "Higher Secondary Certificate with focus on science stream including Physics, Chemistry, and Mathematics"
    }
    // Add more education here as needed
    // Example:
    // {
    //   id: 4,
    //   degree: "Additional Certification",
    //   period: "2024",
    //   university: "University Name",
    //   description: "Description of the program and skills learned"
    // }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-primary mb-3">
                  {edu.university}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 