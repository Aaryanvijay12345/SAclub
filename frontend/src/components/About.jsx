import React from 'react';
import { Lightbulb, Target, Heart } from 'lucide-react';
import Contact from './Contact';

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-[#E6D5AC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6">About Spiritual Activity Club</h1>
          <p className="text-xl text-[#5C3317] max-w-3xl mx-auto">
            Where passion meets purpose! Our club is a vibrant community of individuals who come together to learn, grow & serve through shared interests and activities.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-[#F5E6CC] rounded-2xl shadow-xl p-8 mb-12">
          <div className="prose max-w-none text-[#5C3317]">
            <p className="text-lg mb-6">
              The Spiritual Activity Club at Rajasthan Technical University (RTU), Kota, organizes diverse activities to foster spiritual and academic growth. We conduct career guidance sessions, expert lectures, and workshops like quizzes, debates, and essay writing. We include self-growth courses, academic study classes, and cultural celebrations like Ram Navami and Krishna Janmashtami. Additionally, we arrange enriching cultural and educational trips to spiritual and historical sites.
            </p>
            <div className="bg-[#DEB887] rounded-lg p-6 mb-6">
              <p className="text-lg font-semibold">
                Established in the Year 2016 and earlier known as the Inspire Club.
              </p>
              <p className="text-lg mt-2">
                Now the club is known as the Spiritual Activity Club as the name suggested by our Hon'ble Vice Chancellor Dr. S.K. Singh Sir.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#F5E6CC] rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-[#8B4513] mr-3" />
              <h2 className="text-2xl font-bold text-[#8B4513]">Vision</h2>
            </div>
            <p className="text-[#5C3317]">
              To create a harmonious and enlightened community of students by integrating spiritual wisdom with academic excellence, fostering cultural unity, and inspiring personal growth.
            </p>
          </div>
          <div className="bg-[#F5E6CC] rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-[#8B4513] mr-3" />
              <h2 className="text-2xl font-bold text-[#8B4513]">Mission</h2>
            </div>
            <p className="text-[#5C3317]">
              To foster spiritual and academic growth through sessions, courses, and celebrations, promoting holistic development and community well-being.
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center">
          <Heart className="h-12 w-12 text-[#8B4513] animate-pulse" />
        </div>
      </div>
    </div>
    
      {/* Add Contact Footer Here */}

      <Contact />
      </>
  );
};

export default About;
