import React from 'react';

const skillCategories = [
  {
    title: 'Salesforce',
    skills: [
      { name: 'Apex' },
      { name: 'Lightning Web Components' },
      { name: 'Flows' },
      { name: 'Process Builder' },
      { name: 'Service Cloud' },
      { name: 'Sales Cloud' },
      { name: 'Experience Cloud' },
      { name: 'SOQL/SOSL' },
    ]
  },
  {
    title: 'Web',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'Node.js' },
      { name: 'REST APIs' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'ET' },
      { name: 'Data Loader' },
      { name: 'Firebase' },
      { name: 'GitHub' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center relative">
                {category.title}
                <span className="block w-12 h-1 bg-blue-400 mx-auto mt-2 rounded-full"></span>
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm shadow-sm hover:bg-blue-200 transition-colors duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;    