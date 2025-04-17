// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Contact from '../components/Contact';
// import vrindavan from '../assets/vrindavan.png';
// import puri from '../assets/puri.png';
// import culturalBg from '../assets/culturalBg.png';
// import vrindavan1 from '../assets/vrindavan/vrindavan1.png';
// import vrindavan2 from '../assets/vrindavan/vrindavan2.png';
// import vrindavan3 from '../assets/vrindavan/vrindavan3.png';
// import vrindavan4 from '../assets/vrindavan/vrindavan4.png';
// import vrindavan5 from '../assets/vrindavan/vrindavan5.png';
// import vrindavan6 from '../assets/vrindavan/vrindavan6.png';
// import vrindavan7 from '../assets/vrindavan/vrindavan7.png';
// import vrindavan8 from '../assets/vrindavan/vrindavan8.png';

// const culturalTrips = [
//   {
//     title: 'Vrindavan',
//     description: 'Experience the divine land of Krishna with vibrant celebrations like Holi and Janmashtami.',
//     image: vrindavan,
//   },
//   {
//     title: 'Jagannath Puri',
//     description: 'Witness the grand Rath Yatra and immerse in the spiritual aura of Puri temple.',
//     image: puri,
//   },
// ];

// const vrindavanDetails = [
//   {
//     image: vrindavan1,
//     description: 'Sessions by the Spiritual Masters.',
//   },
//   {
//     image: vrindavan2,
//     description: 'Group Photo',
//   },
//   {
//     image: vrindavan3,
//     description: 'ISKCON Vrindava visit',
//   },
//   {
//     image: vrindavan4,
//     description: 'Banke Bihari Temple – a spiritual hub where devotion meets tradition.',
//   },
//   {
//     image: vrindavan5,
//     description: 'Holi Festival – where colors meet divine love and joy.',
//   },
//   {
//     image: vrindavan6,
//     description: 'Yamuna Ghats – serene evenings of aarti and Krishna katha.',
//   },
//   {
//     image: vrindavan7,
//     description: 'Delicious Prasadam',
//   },
//   {
//     image: vrindavan8,
//     description: 'Holi Festival – where colors meet divine love and joy.',
//   },
// ];

// const puriDetails = [
//   {
//     image: puri,
//     description: 'Jagannath Temple – one of the Char Dham pilgrimage sites.',
//   },
//   {
//     image: puri,
//     description: 'Rath Yatra – the chariot festival that draws millions in devotion.',
//   },
//   {
//     image: puri,
//     description: 'Golden Beach – a tranquil escape after a spiritual journey.',
//   },
//   {
//     image: puri,
//     description: 'Jagannath Temple – one of the Char Dham pilgrimage sites.',
//   },
//   {
//     image: puri,
//     description: 'Rath Yatra – the chariot festival that draws millions in devotion.',
//   },
//   {
//     image: puri,
//     description: 'Golden Beach – a tranquil escape after a spiritual journey.',
//   },
//   {
//     image: puri,
//     description: 'Jagannath Temple – one of the Char Dham pilgrimage sites.',
//   },
//   {
//     image: puri,
//     description: 'Rath Yatra – the chariot festival that draws millions in devotion.',
//   },
//   {
//     image: puri,
//     description: 'Golden Beach – a tranquil escape after a spiritual journey.',
//   },
// ];

// const CulturalTrips = () => {
//   const [activeTrip, setActiveTrip] = useState(null);

//   const handleCardClick = (title) => {
//     setActiveTrip(activeTrip === title ? null : title);
//   };

//   const TripDetailCard = ({ title, details }) => (
//     <div className="mt-12 animate-fade-in transition-all duration-700 ease-in-out">
//       <div className="bg-white/30 border border-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
//         <h3 className="text-3xl font-bold text-white mb-6 text-center">
//           {title}
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {details.map((spot, idx) => (
//             <div
//               key={idx}
//               className="bg-white/70 rounded-xl overflow-hidden shadow-lg"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={spot.image}
//                   alt="Trip view"
//                   className="h-48 w-full object-cover transform scale-110 transition-transform duration-500 hover:scale-100"

//                 />
//               </div>
//               <p className="p-4 text-gray-800 text-sm">{spot.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <Navbar />
//       <div
//         className="min-h-screen bg-cover bg-center bg-no-repeat text-white p-10 relative font-serif"
//         style={{
//           backgroundImage: `url(${culturalBg})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60 z-0"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-6xl mx-auto mt-16">
//           <div className="text-center mb-12">
//             <h1 className="text-5xl font-extrabold tracking-wide mb-4 drop-shadow">
//               🎊 Cultural Journeys
//             </h1>
//             <p className="text-lg text-white/90 max-w-2xl mx-auto">
//               Dive into India's rich cultural roots through spiritual towns and vibrant festivals.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {culturalTrips.map((trip, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 border border-white/30 p-4 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
//                 onClick={() => handleCardClick(trip.title)}
//               >
//                 <img
//                   src={trip.image}
//                   alt={trip.title}
//                   className="rounded-xl h-48 w-full object-cover mb-4 border border-white/30"
//                 />
//                 <h2 className="text-2xl font-bold text-white mb-2">{trip.title}</h2>
//                 <p className="text-white/80">{trip.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Conditional Detail Cards */}
//           {activeTrip === 'Vrindavan' && (
//             <TripDetailCard title="Spiritual Charm of Vrindavan" details={vrindavanDetails} />
//           )}

//           {activeTrip === 'Jagannath Puri' && (
//             <TripDetailCard title="Sacred Soul of Jagannath Puri" details={puriDetails} />
//           )}
//         </div>
//       </div>
//       <Contact />
//     </>
//   );
// };

// export default CulturalTrips;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import culturalBg from '../assets/culturalBg.png';

const BASE_URL = 'http://localhost:5000';

const CulturalTrips = () => {
  const [culturalTrips, setCulturalTrips] = useState([]);
  const [vrindavanDetails, setVrindavanDetails] = useState([]);
  const [puriDetails, setPuriDetails] = useState([]);
  const [activeTrip, setActiveTrip] = useState(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/trips`).then((res) => setCulturalTrips(res.data));
  }, []);

  const handleCardClick = async (title) => {
    if (activeTrip === title) {
      setActiveTrip(null);
    } else {
      setActiveTrip(title);
      if (title === 'Vrindavan') {
        const res = await axios.get(`${BASE_URL}/api/trips/vrindavan`);
        setVrindavanDetails(res.data);
      } else if (title === 'Jagannath Puri') {
        const res = await axios.get(`${BASE_URL}/api/trips/puri`);
        setPuriDetails(res.data);
      }
    }
  };

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lightboxImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + lightboxImages.length) % lightboxImages.length
    );
  };

  const TripDetailCard = ({ title, details }) => (
    <div className="mt-12 animate-fade-in transition-all duration-700 ease-in-out">
      <div className="bg-white/30 border border-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((spot, idx) => (
            <div
              key={idx}
              className="bg-white/70 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="overflow-hidden cursor-pointer" onClick={() =>
                openLightbox(
                  details.map((d) => `${BASE_URL}/assets/${d.image}`),
                  idx
                )
              }>
                <img
                  src={`${BASE_URL}/assets/${spot.image}`}
                  alt="Trip view"
                  className="h-48 w-full object-cover transform scale-110 transition-transform duration-500 hover:scale-100"
                />
              </div>
              <p className="p-4 text-gray-800 text-sm">{spot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat text-white p-10 relative font-serif"
        style={{ backgroundImage: `url(${culturalBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-wide mb-4 drop-shadow">
              🎊 Cultural Journeys
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Dive into India's rich cultural roots through spiritual towns and vibrant festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalTrips.map((trip, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/30 p-4 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
                onClick={() => handleCardClick(trip.title)}
              >
                <img
                  src={`${BASE_URL}/assets/${trip.image}`}
                  alt={trip.title}
                  className="rounded-xl h-48 w-full object-cover mb-4 border border-white/30"
                />
                <h2 className="text-2xl font-bold text-white mb-2">{trip.title}</h2>
                <p className="text-white/80">{trip.description}</p>
              </div>
            ))}
          </div>

          {activeTrip === 'Vrindavan' && (
            <TripDetailCard title="Spiritual Charm of Vrindavan" details={vrindavanDetails} />
          )}
          {activeTrip === 'Jagannath Puri' && (
            <TripDetailCard title="Sacred Soul of Jagannath Puri" details={puriDetails} />
          )}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={lightboxImages[currentIndex]}
              alt="Fullscreen view"
              className="max-w-4xl max-h-[90vh] rounded-xl shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute left-10 text-white text-3xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              ‹
            </button>
            <button
              className="absolute right-10 text-white text-3xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              ›
            </button>
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Contact />
    </>
  );
};

export default CulturalTrips;
