import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <p className="text-gray-600 mb-6">
              I'm Khaled Ali, a passionate Data Analyst with a strong background in Artificial Intelligence 
              and a specialization in Bioinformatics. I love transforming raw data into meaningful insights, 
              solving complex problems, and building intelligent solutions.
            </p>
            <p className="text-gray-600 mb-6">
              With hands-on experience in data analysis, machine learning, and web development, I bring a 
              unique blend of analytical thinking and technical expertise. Whether it's extracting insights 
              from massive datasets, building predictive models, or optimizing business decisions, I thrive 
              on turning challenges into opportunities.
            </p>
            <div className="space-y-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4">Experience Highlights</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">🔹</span>
                    <span>Data Analysis & Visualization – Extracted insights using Python (Pandas, NumPy, Matplotlib, Seaborn) and built interactive dashboards with Power BI & Tableau.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔹</span>
                    <span>Machine Learning & AI – Developed predictive models with TensorFlow & PyTorch, including a Pose Estimation system with real-time tracking and fall detection.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔹</span>
                    <span>Database Management – Managed SQL & MongoDB databases, optimizing queries for large datasets.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔹</span>
                    <span>Web Development – Built responsive web applications using React, Next.js, and Tailwind CSS.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔹</span>
                    <span>Business Intelligence – Transformed raw data into actionable insights to drive smarter decisions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✨</span>
                    <span>Passionate about solving problems, optimizing processes, and delivering data-driven solutions!</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4">Education</h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <p className="flex items-center mb-1">
                      <span className="mr-2">🎓</span>
                      <span className="font-medium">Bachelor's Degree in Artificial Intelligence</span>
                    </p>
                    <p className="flex items-center mb-2">
                      <span className="mr-2">📍</span>
                      <span>Delta University for Science and Technology – Bioinformatics Department</span>
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Specialized in Bioinformatics, combining AI and data science to analyze biological data.</li>
                      <li>Gained strong expertise in machine learning, deep learning, and data analysis.</li>
                      <li>Worked on advanced AI projects, including Pose Estimation using HRNet for real-world applications.</li>
                      <li>Passionate about applying AI to solve complex problems and drive innovation.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;