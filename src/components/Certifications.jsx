import React from 'react';

const Certifications = () => {
  // Dynamic certifications data - add new certifications here
  const certifications = [
    {
      id: 1,
      name: "Salesforce System Administrator",
      issuer: "Salesforce",
      date: "2025",
      imageUrl: "#",
      certificateUrl: "#", // Add your actual certificate link here
      description: "Certified in Salesforce system administration including user management, security controls, data management, automation, reporting, and platform configuration"
    },
    {
      id: 2,
      name: "Salesforce Platform Developer I",
      issuer: "Salesforce",
      date: "2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQFNAg-znWdjCg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727093298224?e=1753041600&v=beta&t=no5hkb9sK3eJgqLBxm29HUO3RDWpDrGiSe1T68RBgUQ",
      certificateUrl: "#", // Add your actual certificate link here
      description: "Certified in Apex, Lightning Web Components, and Salesforce platform development"
    },
    {
      id: 3,
      name: "Java 8 Essential Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/C4D1FAQHvxTk7jdxNrA/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1674016335715?e=1753041600&v=beta&t=L3Nx-2VHUIf5j5l2N8UbRsO5bzwqoQ4b9Pvaetrmqv0",
      certificateUrl: "https://www.linkedin.com/learning/certificates/09f2f480bbae0092bbff5fb8cc5b222fc9c089392e7fdc1694411f4da2cca930", // Add your actual certificate link here
      description: "Comprehensive training in Java 8 fundamentals including object-oriented programming, collections framework, lambda expressions, streams API, and modern Java development practices"
    },
    {
      id: 4,
      name: "Fundamentals of Computers Seminar Certificate",
      issuer: "AstroMediComp",
      date: "2022",
      imageUrl: "#",
      certificateUrl: "https://astromedicomp.org/Certificate/StudentCertificate.php?cuid=FND-2022-6Z4AW3SG1B", // Add your actual certificate link here
      description: "Comprehensive understanding of computer fundamentals including data representation, memory structure, CPU architecture, booting process, SDK/toolchain, virtual machines, and program organization"
    },
    {
      id: 5,
      name: "HPP (CUDA & OpenCL) Seminar Certificate",
      issuer: "AstroMediComp",
      date: "2022",
      imageUrl: "#",
      certificateUrl: "https://astromedicomp.org/Certificate/StudentCertificate.php?cuid=HPP-2022-PXM1B6SZC7", // Add your actual certificate link here
      description: "Introduction to GPU programming with CUDA and OpenCL, covering device enumeration, vector operations, matrix multiplication, and applications in medical imaging, signal processing, and big data analytics"
    },
    
    // Add more certifications here as you complete them
    // Example:
    // {
    //   id: 3,
    //   name: "React Developer Certification",
    //   issuer: "Meta",
    //   date: "2024",
    //   imageUrl: "path/to/certificate-image.jpg",
    //   certificateUrl: "https://your-certificate-link.com",
    //   description: "Advanced React development and best practices"
    // }
  ];

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Certifications
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              {/* Certificate Image - Clickable */}
              <div className="relative group cursor-pointer">
                <a 
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={cert.imageUrl} 
                    alt={`${cert.name} Certificate`}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    // onError={(e) => {
                    //   e.target.onerror = null;
                    //   e.target.src = "https://via.placeholder.com/300x200/6B7280/FFFFFF?text=Certificate";
                    // }}
                  />
                </a>
                
                {/* Overlay with view certificate link */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                    View Certificate
                  </span>
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                  {cert.name}
                </h3>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600 font-medium truncate">{cert.issuer}</span>
                  <span className="text-xs text-gray-500">{cert.date}</span>
                </div>
                
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state when no certifications */}
        {certifications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📜</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Certifications Yet</h3>
            <p className="text-gray-500">Certifications will appear here as you complete them.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications; 