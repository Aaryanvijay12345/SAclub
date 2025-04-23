// import React from 'react';
// import { Circle, Sun, Star } from 'lucide-react';
// import logo from '../assets/logo.png';
// import homeBg from '../assets/homeBg.jpg'; // ✅ Import your local background

// const Hero = () => {
//   const shapes = Array(12).fill(null);

//   return (
//     <div
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{
//         backgroundImage: `url(${homeBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Floating Shapes */}
//       {shapes.map((_, index) => {
//         const icons = [Circle, Sun, Star];
//         const Icon = icons[index % icons.length];
//         const size = Math.floor(Math.random() * 40) + 20;
//         const left = Math.floor(Math.random() * 100);
//         const top = Math.floor(Math.random() * 100);
//         const opacity = Math.random() * 0.3 + 0.1;

//         return (
//           <div
//             key={index}
//             className="absolute floating-shape"
//             style={{
//               left: `${left}%`,
//               top: `${top}%`,
//             }}
//           >
//             <Icon
//               className="text-purple-600"
//               style={{
//                 width: size,
//                 height: size,
//                 opacity: opacity,
//               }}
//             />
//           </div>
//         );
//       })}

//       {/* 🔥 Dark Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>

//       {/* Hero Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <div className="py-12">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
//             “Learn,
//             <span className="inline-block ml-2 mr-2">Grow</span>
//             & Serve”
//           </h1>

//           <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
//             Join our spiritual community to explore meditation, mindfulness, and personal growth through various spiritual activities and practices.
//           </p>

//           <div className="flex justify-center gap-4">
//             <a
//               href="#activities"
//               className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105"
//             >
//               Explore Activities
//             </a>
//             <a
//               href="#about"
//               className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full hover:bg-purple-50 transition duration-300 transform hover:scale-105"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from 'react';
// import { Circle, Sun, Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import home5 from '../assets/home/home5.png';
// import home1 from '../assets/home/home1.png';
// import home2 from '../assets/home/home2.png';
// import home3 from '../assets/home/home3.png';
// import home4 from '../assets/home/home4.png';




// const backgrounds = [home1, home2, home3, home4, home5];

// const Hero = () => {
//   const shapes = Array(12).fill(null);
//   const [showGreeting, setShowGreeting] = useState(true);
//   const [bgIndex, setBgIndex] = useState(0);

//   // Inside your component
// const navigate = useNavigate();

//   // Greeting disappears after 2 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => setShowGreeting(false), 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Background image change every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000"
//       style={{
//         backgroundImage: `url(${backgrounds[bgIndex]})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Floating Shapes */}
//       {shapes.map((_, index) => {
//         const icons = [Circle, Sun, Star];
//         const Icon = icons[index % icons.length];
//         const size = Math.floor(Math.random() * 40) + 20;
//         const left = Math.floor(Math.random() * 100);
//         const top = Math.floor(Math.random() * 100);
//         const opacity = Math.random() * 0.3 + 0.1;

//         return (
//           <div
//             key={index}
//             className="absolute floating-shape"
//             style={{
//               left: `${left}%`,
//               top: `${top}%`,
//             }}
//           >
//             <Icon
//               className="text-purple-600 animate-pulse"
//               style={{
//                 width: size,
//                 height: size,
//                 opacity: opacity,
//               }}
//             />
//           </div>
//         );
//       })}

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>

//       {/* AnimatePresence for Greeting */}
//       <AnimatePresence>
//   {showGreeting && (
//     <motion.div
//       key="greeting"
//       className="absolute text-white text-5xl md:text-7xl font-extrabold z-20 flex gap-1"
//       initial="hidden"
//       animate="visible"
//       exit={{ opacity: 0 }}
//       variants={{
//         hidden: {},
//         visible: {
//           transition: {
//             staggerChildren: 0.1,
//           },
//         },
//       }}
//     >
//       {[..."Hare Krishna 🙏"]
// .map((char, i) => (
//         <motion.span
//           key={i}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   )}
// </AnimatePresence>



//       {/* Hero Content */}
//       {!showGreeting && (
//         <motion.div
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//          <div className="pt-40 pb-20">

//             <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
//               “Learn, <span className="inline-block ml-2 mr-2">Grow</span> & Serve”
//             </h1>
//             <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
//               Join our spiritual community to explore meditation, mindfulness, and personal growth
//               through various spiritual activities and practices.
//             </p>
//             <div className="flex justify-center gap-4">
//               <motion.a
//                 href="#activities"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
//               >
//                 Explore Activities
//               </motion.a>
//               <motion.button
//   onClick={() => navigate('/about')}
//   whileHover={{ scale: 1.1 }}
//   whileTap={{ scale: 0.95 }}
//   className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full hover:bg-purple-50 transition duration-300"
// >
//   Learn More
// </motion.button>
//             </div>
          
//           </div>
//         </motion.div>
//       )}
      
//     </div>
    
//   );
  
// };

// export default Hero;


import React, { useEffect, useState } from 'react';
import { Circle, Sun, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import home5 from '../assets/home/home5.png';
import home1 from '../assets/home/home1.png';
import home2 from '../assets/home/home2.png';
import home3 from '../assets/home/home3.png';
import home4 from '../assets/home/home4.png';

const backgrounds = [home1, home2, home3, home4, home5];

const Hero = () => {
  const shapes = Array(12).fill(null);
  const [showGreeting, setShowGreeting] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgrounds[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Floating Shapes */}
      {shapes.map((_, index) => {
        const icons = [Circle, Sun, Star];
        const Icon = icons[index % icons.length];
        const size = Math.floor(Math.random() * 40) + 20;
        const left = Math.floor(Math.random() * 100);
        const top = Math.floor(Math.random() * 100);
        const opacity = Math.random() * 0.3 + 0.1;

        return (
          <div
            key={index}
            className="absolute floating-shape"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
          >
            <Icon
              className="text-purple-600 animate-pulse"
              style={{
                width: size,
                height: size,
                opacity: opacity,
              }}
            />
          </div>
        );
      })}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>

      {/* AnimatePresence for Greeting */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            key="greeting"
            className="absolute text-white text-5xl md:text-7xl font-extrabold z-20 flex gap-1"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[..."Hare  Krishna "].map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      {!showGreeting && (
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="pt-[30rem] pb-20 transition-opacity duration-300 opacity-70 hover:opacity-100"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
              “Learn, <span className="inline-block ml-2 mr-2">Grow</span> & Serve”
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join our spiritual community to explore meditation, mindfulness, and personal growth
              through various spiritual activities and practices.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="#activities"
                whileHover={{ scale: 1.1, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 opacity-80 hover:opacity-100"
              >
                Explore Activities
              </motion.a>
              <motion.button
                onClick={() => navigate('/about')}
                whileHover={{ scale: 1.1, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full hover:bg-purple-50 transition duration-300 opacity-80 hover:opacity-100"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
