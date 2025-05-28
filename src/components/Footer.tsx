import React from 'react';
import { Mail, Github, Map, ExternalLink, Cloud } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="h-7 w-7 text-blue-400" />
              <span className="font-bold text-xl">Ti Kloud Réunion</span>
            </div>
            <p className="text-gray-400 mb-4">
              A sovereign educational cloud infrastructure based in Réunion Island, 
              built by and for the academic community.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/tikloudreunion" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:clement-antoine.xavier@epitech.eu" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                  Educational Benefits
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  Documentation
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  Tutorials
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  API Reference
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  Status Page
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Map className="h-5 w-5 text-gray-400 mt-1" />
                <div className="text-gray-400">
                  University of Réunion<br />
                  15 Avenue René Cassin<br />
                  Saint-Denis, 97715
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 mt-1" />
                <a href="mailto:contact@tikloud.re" className="text-gray-400 hover:text-white transition-colors">
                  contact@tikloud.re
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ti Kloud Réunion. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;