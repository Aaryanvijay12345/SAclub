import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';





// Images
import janmashtami1 from '../assets/janmashtami1.png';
import janmashtami2 from '../assets/janmashtami2.png';
import janmashtami3 from '../assets/janmashtami3.png';

import ram1 from '../assets/ram1.png';
import ram2 from '../assets/ram2.png';
import ram3 from '../assets/ram3.png';

import ramPratishta1 from '../assets/rampratishta1.png';
import ramPratishta2 from '../assets/rampratishta2.png';
import ramPratishta3 from '../assets/rampratishta3.png';
import ramPratishta4 from '../assets/rampratishta4.png';
import ramPratishta5 from '../assets/rampratishta5.png';


import Contact from './Contact';

const EventsDetail = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: '🕉 Krishna Janmashtami',
      date: '6 Sept 2023',
      strength: '100+',
      images: [janmashtami1, janmashtami2, janmashtami3],
      points: ['Lamp Lighting', 'Abhishekam', 'Deep Dan', 'Bhajan Sankirtan', 'Prasadam'],
    },
    {
      title: '🙏 Ram Navmi Utsav',
      date: '30 March 2023',
      strength: '80+',
      images: [ram1, ram2, ram3],
      points: ['Ram Katha', 'Drama on Lord Rama’s Life', 'Bhajans and Sankirtan', 'Discourse on Dharma', 'Mahaprasadam'],
    },
    {
      title: '🌟 Sri Ram Lala Pran-Pratishtha Mahotsava',
      date: '21 Jan 2024',
      strength: '200+',
      images: [ramPratishta1, ramPratishta2, ramPratishta3, ramPratishta4, ramPratishta5],
      points: ['Lamp Lighting', 'Bhajan Sankirtan', 'Drama Performance', 'Deep Dan', 'Prasadam'],
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 text-white pt-28 pb-16 px-6 md:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/images/eventDetailBg.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-yellow-400 font-serif text-center">
          ✨ Event Highlights & Details ✨
        </h1>

        <p className="text-lg text-gray-300 mb-10 text-center max-w-3xl mx-auto">
          Dive into the soulful journeys conducted by the <span className="text-yellow-400">Spiritual Activity Club</span>. 
          Each event is an offering of devotion, culture, and community – where hearts unite in bhakti.
        </p>

        <div className="text-center italic text-yellow-200 text-lg mb-16">
          “योगस्थः कुरु कर्माणि संगं त्यक्त्वा धनञ्जय” – *Bhagavad Gita 2.48*
        </div>

        <div className="space-y-12">
        {events.map((event, idx) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      key={idx}
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-800 bg-opacity-30 rounded-3xl p-6 md:p-10 shadow-lg cursor-pointer hover:bg-opacity-40 transition"
      onClick={() => setSelectedEvent(event)}
    >
      <h2 className="text-3xl font-bold text-yellow-300 mb-4">{event.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {event.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="event"
            className="rounded-xl shadow-lg h-52 object-cover w-full"
          />
        ))}
      </div>
    </motion.div>
  );
})}

        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-8 rounded-2xl max-w-xl w-full shadow-2xl relative">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-yellow-400 text-2xl hover:text-white"
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">{selectedEvent.title}</h3>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Students Strength:</strong> {selectedEvent.strength}</p>
              <ul className="list-disc list-inside mt-3 text-gray-300">
                {selectedEvent.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Join Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">🌸 Join Us in the Spiritual Journey</h2>
          <p className="text-lg text-gray-300 mb-6">
            Experience spiritual growth, contribute to seva, and become a part of a divine family.
          </p>
      
        </div>

        {/* Back Link */}
        
      </div>
    </div>

    <Contact/>
    </>
  );
};

export default EventsDetail;
