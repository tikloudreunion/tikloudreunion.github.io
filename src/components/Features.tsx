import React from 'react';
import { Server, Database, HardDrive, Layout } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Server className="h-10 w-10 text-blue-700" />,
      title: 'Virtual Machines',
      description: 'Deploy Linux or Windows VMs for development, testing, or learning server management.'
    },
    {
      icon: <HardDrive className="h-10 w-10 text-blue-700" />,
      title: 'File Storage',
      description: 'Securely store and share your project files with robust backup and version control.'
    },
    {
      icon: <Database className="h-10 w-10 text-blue-700" />,
      title: 'Database Hosting',
      description: 'Host MySQL, PostgreSQL, or MongoDB instances for your applications with easy management.'
    },
    {
      icon: <Layout className="h-10 w-10 text-blue-700" />,
      title: 'Centralized Dashboard',
      description: 'Manage all your resources from a single, intuitive interface designed for students.'
    }
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-blue-700">Powerful Cloud Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to learn, build, and deploy your projects in a secure environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:border-blue-700 border-2 border-transparent"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;