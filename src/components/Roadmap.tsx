import React from 'react';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      quarter: 'Q3 2025',
      title: 'Platform Launch',
      description: 'Initial release with virtual machines, storage, and basic database hosting.',
      status: 'current'
    },
    {
      quarter: 'Q4 2025',
      title: 'Educational Resources',
      description: 'Integrated tutorials, documentation, and learning paths for common cloud patterns.',
      status: 'upcoming'
    },
    {
      quarter: 'Q1 2026',
      title: 'Advanced Services',
      description: 'Kubernetes support, AI/ML tools, and advanced networking features.',
      status: 'upcoming'
    },
    {
      quarter: 'Q2 2026',
      title: 'Inter-University Collaboration',
      description: 'Expansion to other universities in the Indian Ocean region.',
      status: 'upcoming'
    }
  ];

  return (
    <section id="roadmap" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-blue-700">Platform Roadmap</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our journey to build a comprehensive educational cloud platform.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Timeline items */}
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 p-4">
                  <div 
                    className={`card border-l-4 ${
                      milestone.status === 'current' ? 'border-blue-700' : 'border-gray-300'
                    }`}
                  >
                    <span 
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                        milestone.status === 'current' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {milestone.quarter}
                    </span>
                    <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/2 relative">
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                      milestone.status === 'current' ? 'bg-blue-700' : 'bg-gray-300'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;