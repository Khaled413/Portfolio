import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl
}: {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Github size={20} />
          <span>Code</span>
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Pose Estimation using HRNet",
      description: "Advanced human pose estimation system with angle calculation, tracking, and fall detection capabilities.",
      technologies: ["Python", "PyTorch", "OpenCV", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/yourusername/pose-estimation",
      liveUrl: "https://demo.pose-estimation.com"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for visualizing and analyzing large datasets with real-time updates.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/yourusername/data-dashboard"
    },
    {
      title: "AI-Powered Image Classification",
      description: "Deep learning model for accurate image classification with transfer learning.",
      technologies: ["Python", "TensorFlow", "Keras", "Flask"],
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/yourusername/image-classifier",
      liveUrl: "https://demo.image-classifier.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;