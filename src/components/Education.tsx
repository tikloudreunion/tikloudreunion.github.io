import React from 'react';
import { GraduationCap, Code, Users, Lightbulb } from 'lucide-react';

const Education: React.FC = () => {
  const benefits = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-700" />,
      title: 'Hands-on Learning',
      description: 'Apply theoretical knowledge in a real cloud environment without the complexity of commercial platforms.'
    },
    {
      icon: <Code className="h-8 w-8 text-blue-700" />,
      title: 'Project Development',
      description: 'Build and deploy web applications, data analysis tools, and research projects with the right resources.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-700" />,
      title: 'Collaborative Work',
      description: 'Share resources, collaborate on group assignments, and work together across disciplines.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-700" />,
      title: 'Innovation Hub',
      description: 'Experiment with new technologies in a safe environment designed for educational exploration.'
    }
  ];

  return (
    <section id="education" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students collaborating"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-blue-700">Educational Benefits</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ti Kloud Réunion bridges the gap between classroom theory and practical cloud computing skills 
              that are in high demand across industries.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;