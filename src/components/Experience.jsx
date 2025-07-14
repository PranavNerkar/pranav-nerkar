import React from 'react';

const Experience = () => {
  // Dynamic experience data - add new experience here
  const experiences = [
    {
      id: 1,
      title: "Salesforce Consultant",
      company: "Gauri Technologies",
      period: "April 2024 - Present",
      location: "Pune, India",
      description: "Achieved Salesforce Developer Certification during training along with contribution to two full-cycle Salesforce implementation projects",
      details: [
        "In the first project, participated in modifying the sales process and played a key role in data migration activities.",
        "In the second project (Service Cloud), worked on the telephony system using Service Cloud Voice with Amazon Connect, implemented an Experience Cloud site for end users using custom Lightning components, integrated Salesforce with a third-party system, and developed a chatbot for customer support."
      ],
      technologies: ["Salesforce", "Apex", "Lightning Web Components", "Service Cloud", "Experience Cloud", "Amazon Connect", "Chatbot Development"]
    },
    {
      id: 2,
      title: "Intern",
      company: "Vodafone Idea",
      period: "Dec 2022 - March 23",
      location: "Pune, India",
      description: "During my internship, I gained deeper insight into the internal workings of mobile communication systems. I worked on a number routing project where I was responsible for migrating traffic from one gateway to another, ensuring seamless call routing and minimal service disruption.",
      details: [],
      technologies: ["Telecommunications", "Number Routing", "Gateway Migration", "Call Routing Systems"]
    }
    // Add more experience here as needed
    // Example:
    // {
    //   id: 3,
    //   title: "Job Title",
    //   company: "Company Name",
    //   period: "Period",
    //   location: "Location",
    //   description: "Main description",
    //   details: ["Detail 1", "Detail 2"],
    //   technologies: ["Tech 1", "Tech 2"]
    // }
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
              <div key={exp.id} className="relative">
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
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <h4 className="text-lg font-medium text-primary">
                        {exp.company}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {exp.details.length > 0 && (
                      <div className="mb-4">
                        {exp.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 leading-relaxed mb-2 pl-4 border-l-2 border-primary/20">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                    
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