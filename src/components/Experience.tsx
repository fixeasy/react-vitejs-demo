import React from 'react';
import { experiences } from '../data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Expérience Professionnelle</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 bg-white rounded-lg shadow-lg p-6 relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.titre}</h3>
                  <p className="text-blue-600 font-medium">{exp.entreprise}</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">{exp.periode}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                {exp.realisations.map((realisation, idx) => (
                  <li key={idx}>{realisation}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;