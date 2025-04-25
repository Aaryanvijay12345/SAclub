// import React from 'react';
// import { FaLeaf, FaLightbulb, FaBirthdayCake, FaPrayingHands, FaOm, FaUsers } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import backgroundImg from '../assets/eventbg.png';

// const eventsData = [
//   {
//     icon: <FaLeaf className="text-yellow-500 text-5xl mb-4" />,
//     title: 'JANMASHTAMI',
//     description:
//       "Janmashtami is the Annual Flagship Event of Spiritual Activity Club, witnessed by thousands, fostering Krishna Consciousness with various cultural programs and spiritual vibes."
//   },
//   {
//     icon: <FaPrayingHands className="text-yellow-500 text-5xl mb-4" />,
//     title: 'RAM LALLA PRAN PRATISHTHA',
//     description:
//       "A divine celebration commemorating the consecration of Ram Lalla. Hundreds joined to chant, pray, and celebrate with devotion."
//   },
//   {
//     icon: <FaOm className="text-yellow-500 text-5xl mb-4" />,
//     title: 'RAM NAVMI CELEBRATION',
//     description:
//       "Celebrating the divine appearance of Lord Rama with kirtans, lectures, drama performances, and spiritual festivities."
//   },
//   {
//     icon: <FaBirthdayCake className="text-yellow-500 text-5xl mb-4" />,
//     title: 'BIRTHDAY CELEBRATIONS',
//     description:
//       "Special birthday kirtans and prasadam distribution to honor members and well-wishers of the Spiritual Activity Club family."
//   },
//   {
//     icon: <FaLightbulb className="text-yellow-500 text-5xl mb-4" />,
//     title: 'LEADING EDGE RESEARCH',
//     description:
//       "Research published in reputed journals around Consciousness and Ancient Indian Philosophy, inspired by the Bhagavad Gita."
//   },
//   {
//     icon: <FaUsers className="text-yellow-500 text-5xl mb-4" />,
//     title: 'WEEKLY SATSANG',
//     description:
//       "Weekly get-togethers involving mantra meditation, discussions, games, and spiritual bonding over prasadam."
//   }
// ];

// const fadeVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   exit: { opacity: 0, y: -40, transition: { duration: 0.3 } }
// };

// const Events = () => {
//   return (
//     <div
//       id="events"
//       className="relative py-24 px-4 md:px-16 text-white"
//       style={{
//         backgroundImage: `url(${backgroundImg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-70"></div>

//       <div className="relative z-10 max-w-6xl mx-auto text-center">
//         <h4 className="text-sm tracking-widest text-gray-400 uppercase mb-2">Events</h4>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do.</h2>
//         <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-16 leading-relaxed">
//           The Spiritual Activity Club is a vibrant community that conducts transformative 
//           events throughout the year to nurture inner growth and collective well-being. 
//           From energizing festivals like Ram Navmi and Janmashtami to enlightening lecture 
//           series on the Bhagavad Gita and daily mantra meditation sessions, the club creates 
//           a peaceful sanctuary for students and faculty alike. With soulful kirtans, devotional 
//           gatherings, and uplifting retreats, we aim to awaken consciousness and spread positivity across the campus and beyond.
//         </p>

//         {/* Cards with animation */}
//         <div className="grid md:grid-cols-2 gap-12 mt-10">
//           {eventsData.map((event, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center text-center"
//               initial="hidden"
//               whileInView="visible"
//               exit="exit"
//               viewport={{ once: false, amount: 0.3 }}
//               variants={fadeVariants}
//             >
//               {event.icon}
//               <h3 className="text-lg font-bold tracking-widest mb-2">{event.title}</h3>
//               <p className="text-gray-300 max-w-md">{event.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* See More Button */}
//         <div className="mt-16">
//           <Link
//             to="/eventsDetail"
//             className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
//           >
//             See More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;


import React, { useEffect } from 'react';
import {
  FaLeaf,
  FaLightbulb,
  FaBirthdayCake,
  FaPrayingHands,
  FaOm,
  FaUsers
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import culturalBg from '../assets/culturalBg.png';

const eventsData = [
  {
    icon: <FaLeaf className="text-yellow-500 text-5xl mb-4" />,
    title: 'JANMASHTAMI',
    description:
      "Janmashtami is the Annual Flagship Event of Spiritual Activity Club, witnessed by thousands, fostering Krishna Consciousness with various cultural programs and spiritual vibes."
  },
  {
    icon: <FaPrayingHands className="text-yellow-500 text-5xl mb-4" />,
    title: 'RAM LALLA PRAN PRATISHTHA',
    description:
      "A divine celebration commemorating the consecration of Ram Lalla. Hundreds joined to chant, pray, and celebrate with devotion."
  },
  {
    icon: <FaOm className="text-yellow-500 text-5xl mb-4" />,
    title: 'RAM NAVMI CELEBRATION',
    description:
      "Celebrating the divine appearance of Lord Rama with kirtans, lectures, drama performances, and spiritual festivities."
  },
  {
    icon: <FaBirthdayCake className="text-yellow-500 text-5xl mb-4" />,
    title: 'BIRTHDAY CELEBRATIONS',
    description:
      "Special birthday kirtans and prasadam distribution to honor members and well-wishers of the Spiritual Activity Club family."
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-5xl mb-4" />,
    title: 'LEADING EDGE RESEARCH',
    description:
      "Research published in reputed journals around Consciousness and Ancient Indian Philosophy, inspired by the Bhagavad Gita."
  },
  {
    icon: <FaUsers className="text-yellow-500 text-5xl mb-4" />,
    title: 'WEEKLY SATSANG',
    description:
      "Weekly get-togethers involving mantra meditation, discussions, games, and spiritual bonding over prasadam."
  }
];

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      id="events"
      className="relative py-24 px-4 md:px-16 text-white"
      style={{
        backgroundImage: `url(${culturalBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h4 className="text-sm tracking-widest text-gray-400 uppercase mb-2">Events</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do.</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-16 leading-relaxed">
          The Spiritual Activity Club is a vibrant community that conducts transformative 
          events throughout the year to nurture inner growth and collective well-being. 
          From energizing festivals like Ram Navmi and Janmashtami to enlightening lecture 
          series on the Bhagavad Gita and daily mantra meditation sessions, the club creates 
          a peaceful sanctuary for students and faculty alike. With soulful kirtans, devotional 
          gatherings, and uplifting retreats, we aim to awaken consciousness and spread positivity across the campus and beyond.
        </p>

        {/* Event Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {eventsData.map((event, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-left hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {event.icon}
                <h3 className="text-xl font-bold text-yellow-400 mb-2 mt-2">{event.title}</h3>
                <p className="text-gray-200 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-16">
          <Link
            to="/eventsDetail"
            className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
