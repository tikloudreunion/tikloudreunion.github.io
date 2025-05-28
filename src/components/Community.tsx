import React from 'react';
import { Github, Heart, Code2, Users } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-blue-700">Open Source Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ti Kloud Réunion is built and maintained by our community of students, 
            teachers, and cloud enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">How to Contribute</h3>
            <p className="text-gray-600 mb-6">
              We welcome contributions from everyone, whether you're a student, 
              teacher, or professional. Here's how you can get involved:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Code2 className="h-6 w-6 text-blue-700 mt-1" />
                <div>
                  <h4 className="font-medium">Contribute Code</h4>
                  <p className="text-gray-600">
                    Submit pull requests to improve the platform or fix bugs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-700 mt-1" />
                <div>
                  <h4 className="font-medium">Join the Discussion</h4>
                  <p className="text-gray-600">
                    Participate in our forums and community meetings to shape the platform's future.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-blue-700 mt-1" />
                <div>
                  <h4 className="font-medium">Spread the Word</h4>
                  <p className="text-gray-600">
                    Tell other students and educators about Ti Kloud Réunion.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://github.com/tikloudreunion" 
                className="btn btn-primary inline-flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                Visit Our GitHub
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Our Supporters</h3>
            <p className="text-gray-600 mb-6">
              Ti Kloud Réunion is proudly supported by:
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="font-bold">Epitech Réunion</div>
                  <div className="text-sm text-gray-500">Academic Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;