import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10 pt-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-up">
            <h1 className="font-bold mb-6">
              Ti Kloud Réunion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A sovereign educational cloud, built by and for students
            </p>
            <p className="mb-8 text-blue-50 max-w-lg">
              Access virtual machines, file storage, and databases for learning, prototyping, 
              and developing projects in a privacy-respecting environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/tikloudreunion" className="btn btn-primary bg-white text-blue-700 hover:bg-blue-50">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5 inline" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Student using cloud computing"
              className="rounded-lg shadow-2xl max-w-full md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;