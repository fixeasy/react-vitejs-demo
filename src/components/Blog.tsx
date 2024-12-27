import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { articles } from '../data/blog';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.titre}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Clock size={16} className="mr-1" />
                  <span>{article.tempsLecture} de lecture</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{article.titre}</h3>
                <p className="text-gray-600 mb-4">{article.resume}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span>Lire l'article</span>
                  <ChevronRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;