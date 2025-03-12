import React from 'react';

const CertificateCard = ({
  title,
  issuer,
  date,
  image
}: {
  title: string;
  issuer: string;
  date: string;
  image: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{issuer}</p>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  </div>
);

const Certificates = () => {
  const certificates = [
    {
      title: "Advanced Data Analysis",
      issuer: "Google",
      date: "2024",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "2023",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Deep Learning Professional Certificate",
      issuer: "DeepLearning.AI",
      date: "2023",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;