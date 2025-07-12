import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Tech Solutions Inc.",
      content: "Pranav is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Digital Innovations",
      content: "Working with Pranav was a great experience. He's not only technically skilled but also a great team player who always goes the extra mile.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Professor",
      company: "University of Technology",
      content: "Pranav was one of my top students. His dedication to learning and ability to apply complex concepts to real-world problems is remarkable.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "CEO",
      company: "StartupXYZ",
      content: "Pranav helped us build our MVP from scratch. His technical expertise and understanding of business requirements made him invaluable to our team.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What People Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 