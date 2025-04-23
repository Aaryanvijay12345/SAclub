import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import alumni1 from '../assets/alumni1.png';
import alumni2 from '../assets/alumni2.png';
import alumni3 from '../assets/alumni3.png';
import alumni4 from '../assets/alumni4.png';
import alumni5 from '../assets/alumni5.png';
import alumni6 from '../assets/alumni6.png';
import alumni7 from '../assets/alumni7.png';
import alumni8 from '../assets/alumni8.png';
import alumni9 from '../assets/alumni9.png';
import alumni10 from '../assets/alumni10.png';
import Contact from './Contact';
import eventBg from '../assets/eventBg.png'

const alumniData = [
  {
    name: 'Mr. Rahul Sharma',
    title: 'Batch 2016-20\nCivil Engineering\nJunior Engineer @Pollution Control Board, Bundi',
    image: alumni1,
  },
  {
    name: 'Mr. Shivam Sharma',
    title: 'Batch 2017-21\nInformation Technology\nChemistry Faculty, Allen Career Institute',
    image: alumni2,
  },
  {
    name: 'Mr. Tushar Dave',
    title: 'Batch 2017-21\nComputer Science\nSoftware Developer, Sprinto',
    image: alumni3,
  },
  {
    name: 'Mr. Vikram Singh',
    title: 'Batch 2017-21\nComputer Science\nPython Developer, Nokia',
    image: alumni4,
  },
  {
    name: 'Mr. Harshit Khandelwal',
    title: 'Batch 2017-21\nInformation Technology\nWeb Developer, Website Learners',
    image: alumni5,
  },
  {
    name: 'Mr. Himanshu Sir',
    title: 'Batch 2016-20\nECE Engineering M.Tech,\nMNIT Jaipur PhD,\nSoftware Developer at Nokia R&D',
    image: alumni6,
  },
  {
    name: 'Mr. Yashwant Singh Gaur',
    title: 'Batch 2019 -23\nCivil Engineering\nAIR 9,  CDS Exam Lieutenant',
    image: alumni7,
  },
  {
    name: 'Mr. Devendra Yadav',
    title: 'Batch 2019-23\nCivil Engineering\nSenior Engineer Executive (Larsen & Toubro)',
    image: alumni8,
  },
  {
    name: 'Mr. Vedant Gupta',
    title: 'Batch 2017-21\nAeraunotical Engineering, M.Tech, IISC Bangalore\nAssociate AI Developer,SAP Labs India',
    image: alumni9,
  },
  {
    name: 'Mr. Kushal Tiwari',
    title: 'Batch 2016-20\nElectrical Engineering, M.Tech, NIT Warangal\nWorking at IIT Madras Research Park',
    image: alumni10,
  },
];

const Alumni = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        className="relative text-white py-20 px-6 scroll-smooth"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eventBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
        >
        <div className="text-center mb-12">
          <h2 className="text-xl uppercase tracking-widest text-purple-300">Meet Our</h2>
          <h1 className="text-5xl font-bold mb-4 text-white">Alumni</h1>
          <p className="italic text-gray-300 max-w-2xl mx-auto">
            "Whatever standards a great man sets by exemplary acts, all the world pursues."
            <br />
            <span className="block mt-1">[Bhagavad Gita 3.21]</span>
          </p>
          <div className="border-t border-purple-500 w-3/4 mx-auto my-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <AnimatePresence>
            {alumniData.map((alumnus, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center shadow-2xl hover:scale-95 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <img
                  src={alumnus.image}
                  alt={alumnus.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-300 shadow-md"
                />
                <h3 className="text-lg font-bold text-white">{alumnus.name}</h3>
                <p className="text-sm text-gray-200 whitespace-pre-line">{alumnus.title}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Add Contact Footer Here */}
      <Contact />
    </>
  );
};

export default Alumni;