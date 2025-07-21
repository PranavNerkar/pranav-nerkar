import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [testimonialSubmitted, setTestimonialSubmitted] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    linkedIn: '',
    portfolio: ''
  });

  // Testimonial form state
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    testimonial: '',
    rating: 5,
    allowPublicDisplay: false
  });

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleTestimonialChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTestimonialForm({
      ...testimonialForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  useEffect(() => {
    if (localStorage.getItem('contactSubmitted') === 'true') {
      setContactSubmitted(true);
    }
    if (localStorage.getItem('testimonialSubmitted') === 'true') {
      setTestimonialSubmitted(true);
    }
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), {
        ...contactForm,
        createdAt: Timestamp.now()
      });
      setContactForm({
        name: '',
        email: '',
        message: '',
        linkedIn: '',
        portfolio: ''
      });
      localStorage.setItem('contactSubmitted', 'true');
      setContactSubmitted(true);
      // Optionally show a success message
    } catch (error) {
      // Optionally show an error message
      console.error('Error submitting contact form:', error);
    }
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'testimonials'), {
        ...testimonialForm,
        createdAt: Timestamp.now()
      });
      setTestimonialForm({
        name: '',
        email: '',
        company: '',
        position: '',
        testimonial: '',
        rating: 5,
        allowPublicDisplay: false
      });
      setSubmitSuccess(true);
      localStorage.setItem('testimonialSubmitted', 'true');
      setTestimonialSubmitted(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Get In Touch
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's Connect
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">pranavnerkar321@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zm0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 8605146518</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {/* WhatsApp Official Icon */}
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.11 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.23 1.4 1.4-4.23-.23-.39A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.24 1.23.38 1.65.49.69.18 1.32.15 1.82.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+91 8605146518</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <p className="text-gray-600">linkedin.com/in/pranav-nerkar</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">GitHub</h4>
                    <p className="text-gray-600">github.com/PranavNerkar</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 14.355c0-.742-.564-1.346-1.274-1.416L17.726 13c-.783 0-1.434.484-1.611 1.192-.242.924-.373 1.901-.373 2.908 0 .742.564 1.346 1.274 1.416L20.726 19c.783 0 1.434-.484 1.611-1.192.242-.924.373-1.901.373-2.908 0-.742-.564-1.346-1.274-1.416L11.274 13zM11.274 13c-.783 0-1.434.484-1.611 1.192-.242.924-.373 1.901-.373 2.908 0 .742.564 1.346 1.274 1.416L14.726 19c.783 0 1.434-.484 1.611-1.192.242-.924.373-1.901.373-2.908 0-.742-.564-1.346-1.274-1.416L11.274 13zM2.726 13c-.783 0-1.434.484-1.611 1.192-.242.924-.373 1.901-.373 2.908 0 .742.564 1.346 1.274 1.416L5.726 19c.783 0 1.434-.484 1.611-1.192.242-.924.373-1.901.373-2.908 0-.742-.564-1.346-1.274-1.416L2.726 13z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LeetCode</h4>
                    <p className="text-gray-600">leetcode.com/u/pranav_nerkar</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Forms Section */}
            <div>
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === 'contact'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Contact Me
                </button>
                <button
                  onClick={() => setActiveTab('testimonial')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === 'testimonial'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Share Testimonial
                </button>
              </div>

              {/* Contact Form */}
              {activeTab === 'contact' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Send Message
                  </h3>
                  {contactSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center mb-6">
                      <span className="text-green-800 font-medium">
                        Thank you! You have already submitted your contact information.
                      </span>
                    </div>
                  ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleContactChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-2">
                        LinkedIn (Optional)
                      </label>
                      <input
                        type="url"
                        id="linkedIn"
                        name="linkedIn"
                        value={contactForm.linkedIn}
                        onChange={handleContactChange}
                        placeholder="https://linkedin.com/in/yourusername"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                        Portfolio Link (Optional)
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={contactForm.portfolio}
                        onChange={handleContactChange}
                        placeholder="https://yourportfolio.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full py-3 text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                  )}
                </div>
              )}

              {/* Testimonial Form */}
              {activeTab === 'testimonial' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Share Your Experience
                  </h3>
                  {(!testimonialSubmitted) && (
                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Have you worked with me or want to share your experience? 
                        I'd love to hear from you! Your feedback helps me grow and improve.
                      </p>
                    </div>
                  )}
                  {testimonialSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center mb-6">
                      <span className="text-green-800 font-medium">
                        Thank you! You have already submitted a testimonial.
                      </span>
                    </div>
                  ) : (
                  <form onSubmit={handleTestimonialSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="testimonial-name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="testimonial-name"
                          name="name"
                          value={testimonialForm.name}
                          onChange={handleTestimonialChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="testimonial-email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="testimonial-email"
                          name="email"
                          value={testimonialForm.email}
                          onChange={handleTestimonialChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    {/* Professional Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={testimonialForm.company}
                          onChange={handleTestimonialChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                          Position/Role
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={testimonialForm.position}
                          onChange={handleTestimonialChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your role or position"
                        />
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How would you rate your experience? *
                      </label>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setTestimonialForm({ ...testimonialForm, rating: star })}
                            className={`text-2xl transition-colors duration-200 ${
                              star <= testimonialForm.rating 
                                ? 'text-yellow-400 hover:text-yellow-500' 
                                : 'text-gray-300 hover:text-gray-400'
                            }`}
                          >
                            ★
                          </button>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">
                          {testimonialForm.rating} out of 5
                        </span>
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div>
                      <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Testimonial *
                      </label>
                      <textarea
                        id="testimonial"
                        name="testimonial"
                        value={testimonialForm.testimonial}
                        onChange={handleTestimonialChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Share your experience working with me, feedback about my work, or any recommendations you'd like to provide..."
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">
                        Please be honest and constructive. Your feedback is valuable to me!
                      </p>
                    </div>
                    
                    {/* Privacy Consent */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="allowPublicDisplay"
                        name="allowPublicDisplay"
                        checked={testimonialForm.allowPublicDisplay}
                        onChange={handleTestimonialChange}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="allowPublicDisplay" className="text-sm text-gray-700">
                        I agree to allow my testimonial to be displayed publicly on this portfolio website. 
                        I understand that my name and company may be shown alongside my testimonial.
                      </label>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-primary hover:bg-primary-dark'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Testimonial'
                      )}
                    </button>
                    
                    {/* Success Message */}
                    {submitSuccess && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-green-800 font-medium">
                            Thank you! Your testimonial has been submitted successfully.
                          </span>
                        </div>
                      </div>
                    )}
                  </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 