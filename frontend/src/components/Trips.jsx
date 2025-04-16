import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import tripBg from '../assets/tripBg.png';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: 'spring' },
  }),
};

const Trips = () => {
  const navigate = useNavigate();

  const handleExplore = (type) => {
    switch (type) {
      case 'historical':
        navigate('/historical-trips');
        break;
      case 'cultural':
        navigate('/cultural-trips');
        break;
      case 'educational':
        navigate('/educational-trips');
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${tripBg})` }}
    >
      <div className="absolute inset-0 bg-purple-900/40"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10 text-white">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Amazing Trips
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Explore the journeys filled with heritage, culture, and spirituality.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Historical Trips',
              desc: 'We’ve explored India\'s rich history with trips to Chittorgarh, Udaipur, Bundi, and many more historical marvels.',
              alt: 'Historical Trip',
              type: 'historical',
            },
            {
              title: 'Cultural Trips',
              desc: 'Experience the vibrant culture through our unforgettable journeys like the Vrindavan - Mathura Trip and many more cultural celebrations.',
              alt: 'Cultural Trip',
              type: 'cultural',
            },
            {
              title: 'Educational Trips',
              desc: 'From Vrindavan to Mount Abu, our spiritual journeys have offered peaceful retreats, soulful discourses, and divine meditation sessions.',
              alt: 'Spiritual Trip',
              type: 'educational',
            },
          ].map((trip, i) => (
            <motion.div
              key={i}
              className="bg-white/90 text-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-300"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={tripBg} alt={trip.alt} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-semibold mb-3 text-purple-700">{trip.title}</h2>
                  <p className="text-sm mb-6">{trip.desc}</p>
                </div>
                <button
                  className="mt-auto bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
                  onClick={() => handleExplore(trip.type)}
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trips;
