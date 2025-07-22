import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'testimonials'),
      where("allowPublicDisplay", "==", true),
      orderBy('createdAt', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTestimonials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

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
    <section id="testimonials" className="section-padding bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What People Say
        </h2>
        
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
          {testimonials.length === 0 ? (
            <p className="text-center text-gray-500">No testimonials yet.</p>
          ) : (
            testimonials.slice(0, 36).map((testimonial, index) => (
              <div key={testimonial.id || index} className="min-w-[300px] max-w-xs bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 text-sm flex-shrink-0">
                {/* Stars */}
                <div className="flex mb-2">
                  {renderStars(testimonial.rating)}
                </div>
              
                {/* Testimonial Message */}
                <p className="text-gray-600 leading-relaxed mb-4 italic text-xs">
                  "{testimonial.testimonial}"
                </p>
              
                {/* Author */}
                <div className="flex items-center mt-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-base">
                      {testimonial.name ? testimonial.name.split(' ').map(n => n[0]).join('') : '?'}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name || 'Anonymous'}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {testimonial.position ? testimonial.position : ''}
                      {testimonial.position && testimonial.company ? ' at ' : ''}
                      {testimonial.company ? testimonial.company : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 