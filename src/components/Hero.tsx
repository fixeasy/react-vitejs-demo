import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              DevOps Engineer
              <span className="text-blue-600"> & Cloud Architect</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Automatiser pour innover : l'ingénierie DevOps au service de vos projets
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Spécialisé dans l'automatisation des processus, l'infrastructure as code et 
              l'orchestration cloud. Je transforme les défis techniques en solutions efficaces 
              et évolutives.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>Me contacter</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#projects"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Voir mes projets
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                <div className="absolute inset-0 rounded-full border-2 border-blue-600"></div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHGmvRp4xdyXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720705478336?e=1740614400&v=beta&t=KB2-Op_En75wNMhpaNo6wVzYql29qA1adthjtqM2Br8"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-600">5+ années d'expérience</p>
                <p className="text-blue-600 font-bold">DevOps & Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
