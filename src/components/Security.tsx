import React from 'react';
import { Lock, Shield, Globe, UserCheck } from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Local Hosting',
      description: 'Infrastructure physically located in Réunion Island, ensuring data never leaves the region.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'GDPR Compliance',
      description: 'All systems designed with privacy by default and strict data protection principles.'
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'Isolated Environments',
      description: 'Each user works in secure, isolated environments with resource limits and access controls.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Data Sovereignty',
      description: 'Full control over your data with no vendor lock-in or third-party access.'
    }
  ];

  return (
    <section id="security" className="section bg-blue-700 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-white">Security & Data Sovereignty</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Privacy and sovereignty are at the core of our educational cloud platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-blue-800 rounded-xl p-6 hover:bg-blue-900 transition-colors duration-300"
            >
              <div className="bg-blue-50 text-blue-700 p-3 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;