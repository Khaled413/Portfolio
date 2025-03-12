import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600">
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect on Freelance Platforms</h3>
              <div className="space-y-2">
                <a
                  href="https://www.upwork.com/freelancers/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Upwork Profile
                </a>
                <a
                  href="https://www.freelancer.com/u/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Freelancer Profile
                </a>
                <a
                  href="https://www.fiverr.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Fiverr Profile
                </a>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;