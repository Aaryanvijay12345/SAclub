import React from 'react';
import { Radiation as Meditation, Sun, Users, Bus, BookOpen } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: <Meditation className="h-8 w-8" />,
      title: 'Seminar',
      description:'Conduct Career Guidance & Youth Counselling Session and Expert Lecture ... many more'
    },
    {
      icon: <Sun className="h-8 w-8" />,
       title: 'Courses & Classes',
      description: 'Conduct Academic Study Classes & Self Growth Courses... many more'
    },
    {
      icon: <Users className="h-8 w-8" />,
         title: 'Cultural Celebrations',
      description: 'Organise Ram Navami, Krishna Janmashtami... many more'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Workshops',
      description: 'Conduct Quiz Competition, Debate Session, Essay Writing... many more'
    },
    {
      icon: <Bus className="h-8 w-8" />,
        title: 'Tours & Trips',
      description: 'Organise Cultural & Educational Trips'
    },
    
  ];

  return (
    <div id="activities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Activities & Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our range of spiritual activities designed to nurture your inner growth and well-being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-purple-600 mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;