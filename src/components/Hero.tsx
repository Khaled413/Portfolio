import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Data Analyst & AI Specialist
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transforming complex data into actionable insights. Specialized in AI and Bioinformatics,
              I help businesses make data-driven decisions.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://upwork.com/freelancers/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/profile.jpg"
              alt="Khaled Ali - Data Analyst & AI Specialist"
              className="rounded-xl w-72 h-72 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;