import React from 'react';
import { technicalSkills, softSkills } from '../data/skills';
import { Info } from 'lucide-react';

const SkillLevel = ({ level, name }: { level: number; name: string }) => {
  const getColor = (skillLevel: number) => {
    switch (skillLevel) {
      case 1: return 'bg-gray-400';
      case 2: return 'bg-blue-400';
      case 3: return 'bg-green-400';
      case 4: return 'bg-purple-400';
      case 5: return 'bg-yellow-400';
      default: return 'bg-gray-200';
    }
  };

  const getLevelLabel = (level: number) => {
    switch (level) {
      case 1: return 'Théorique';
      case 2: return 'Basique';
      case 3: return 'Fonctionnel';
      case 4: return 'Maîtrise';
      case 5: return 'Expert';
      default: return '';
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-600">{getLevelLabel(level)}</span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((currentLevel) => (
          <div
            key={currentLevel}
            className={`h-2 flex-1 rounded-full transition-all duration-500 ${
              level === currentLevel ? getColor(currentLevel) : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const LevelLegend = () => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-8">
    <div className="flex items-center mb-2">
      <Info size={20} className="text-blue-600 mr-2" />
      <h4 className="font-semibold">Niveaux de compétence</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-gray-400 mr-2" />
        <span>1 - Théorique</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-blue-400 mr-2" />
        <span>2 - Basique</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
        <span>3 - Fonctionnel</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-purple-400 mr-2" />
        <span>4 - Maîtrise</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2" />
        <span>5 - Expert</span>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences Techniques</h2>

        <LevelLegend />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {technicalSkills.slice(0, 2).map((category) => (
              <div key={category.category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {category.category}
                </h3>
                {category.tools.map((tool) => (
                  <SkillLevel key={tool.name} name={tool.name} level={Math.ceil(tool.level / 20)} />
                ))}
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {technicalSkills.slice(2).map((category) => (
              <div key={category.category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {category.category}
                </h3>
                {category.tools.map((tool) => (
                  <SkillLevel key={tool.name} name={tool.name} level={Math.ceil(tool.level / 20)} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
