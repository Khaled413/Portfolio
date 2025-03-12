import React from 'react';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
      <span className="mr-2">🔹</span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis"]
    },
    {
      title: "Database Management",
      skills: ["SQL", "MongoDB", "Database Design", "Data Modeling", "ETL Processes"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Neural Networks"]
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Other Tools & Technologies",
      skills: ["Git", "AWS", "Agile Methodology"]
    },
    {
      title: "Office & Documentation",
      skills: ["Microsoft Excel", "Word", "PowerPoint", "Technical Writing"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;