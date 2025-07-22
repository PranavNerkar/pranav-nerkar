import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { collection, onSnapshot, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import Login from './Login';

const TestimonialAdmin = () => {
  const [user, setUser] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'true', 'false'

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setTestimonials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleUpdate = async () => {
    if (!editingTestimonial) return;
    const testimonialRef = doc(db, 'testimonials', editingTestimonial.id);
    try {
      await updateDoc(testimonialRef, {
        testimonial: editingTestimonial.testimonial,
        name: editingTestimonial.name,
        company: editingTestimonial.company,
        position: editingTestimonial.position,
        rating: editingTestimonial.rating,
        allowPublicDisplay: editingTestimonial.allowPublicDisplay,
      });
      setEditingTestimonial(null);
      setShowModal(false);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      const testimonialRef = doc(db, 'testimonials', id);
      try {
        await deleteDoc(testimonialRef);
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  // Filtered testimonials based on allowPublicDisplay
  const filteredTestimonials = testimonials.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'true') return t.allowPublicDisplay === true;
    if (filter === 'false') return t.allowPublicDisplay === false;
    return true;
  });

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Testimonial Dashboard</h1>
          <div className="flex items-center gap-4">
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option value="all">All</option>
              <option value="true">Allow Public Display: True</option>
              <option value="false">Allow Public Display: False</option>
            </select>
            <button
              onClick={handleLogout}
              className="btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTestimonials.map(t => (
              <div key={t.id} className="border rounded-lg p-4 bg-gray-50 flex flex-col justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="italic text-gray-600 mb-2">"{t.testimonial}"</p>
                  <p className="text-xs text-gray-500 mb-1">{t.position}{t.position && t.company ? ' at ' : ''}{t.company}</p>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < (t.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Allow Public Display: {t.allowPublicDisplay ? 'Yes' : 'No'}</p>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <button onClick={() => { setEditingTestimonial(t); setShowModal(true); }} className="text-blue-600 hover:underline">Edit</button>
                  <button onClick={() => handleDelete(t.id)} className="text-red-600 hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edit Modal */}
        {showModal && editingTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => { setShowModal(false); setEditingTestimonial(null); }}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Edit Testimonial</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={editingTestimonial.name || ''}
                  onChange={e => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={editingTestimonial.position || ''}
                  onChange={e => setEditingTestimonial({ ...editingTestimonial, position: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Position"
                />
                <input
                  type="text"
                  value={editingTestimonial.company || ''}
                  onChange={e => setEditingTestimonial({ ...editingTestimonial, company: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Company"
                />
                <textarea
                  value={editingTestimonial.testimonial || ''}
                  onChange={e => setEditingTestimonial({ ...editingTestimonial, testimonial: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                  rows="4"
                  placeholder="Testimonial"
                ></textarea>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setEditingTestimonial({ ...editingTestimonial, rating: star })}
                        className={`text-2xl ${star <= (editingTestimonial.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="allowPublicDisplay"
                    checked={!!editingTestimonial.allowPublicDisplay}
                    onChange={e => setEditingTestimonial({ ...editingTestimonial, allowPublicDisplay: e.target.checked })}
                  />
                  <label htmlFor="allowPublicDisplay" className="text-sm text-gray-700">Allow Public Display</label>
                </div>
                <div className="flex gap-4 mt-4">
                  <button onClick={handleUpdate} className="btn-primary">Save</button>
                  <button onClick={() => { setShowModal(false); setEditingTestimonial(null); }} className="btn-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialAdmin; 