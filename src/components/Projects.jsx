import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "📋",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      image: "🌤️",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design.",
      image: "💼",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication and file sharing capabilities.",
      image: "💬",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support and SEO optimization.",
      image: "📝",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="btn-primary text-sm px-4 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn-secondary text-sm px-4 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 