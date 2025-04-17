import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import iitKanpur from '../assets/iitKanpur.png';
import homeBg from '../assets/homeBg.jpg';
import Contact from '../components/Contact';

const educationalTrips = [
  {
    title: 'IIT Kanpur',
    description:
      'Explore the innovative hub of India with cutting-edge research, world-class infrastructure, and vibrant campus life.',
    image: iitKanpur,
  },
];

const iitKanpurDetails = [
  {
    image: iitKanpur,
    description:
      'IIT Kanpur – A premier institution known for its academic excellence and research.',
  },
  {
    image: iitKanpur,
    description:
      'Campus Tour – Discover the state-of-the-art labs, classrooms, and green campus.',
  },
  {
    image: iitKanpur,
    description:
      'Workshops & Seminars – Attend interactive sessions by industry leaders and professors.',
  },
  {
    image: iitKanpur,
    description:
      'Cultural Events – Experience the vibrant student life and cultural festivals.',
  },
];

const EducationalTrips = () => {
  const [activeTrip, setActiveTrip] = useState(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (title) => {
    setActiveTrip(activeTrip === title ? null : title);
  };

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % lightboxImages.length);
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);

  const TripDetailCard = ({ title, details }) => (
    <div className="mt-12 animate-fade-in transition-all duration-700 ease-in-out">
      <div className="bg-white/30 border border-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((spot, idx) => (
            <div
              key={idx}
              className="bg-white/70 rounded-xl overflow-hidden shadow-lg"
            >
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openLightbox(details.map((d) => d.image), idx)
                }
              >
                <img
                  src={spot.image}
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
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-wide mb-4 drop-shadow">
              🎓 Educational & Spiritual Journeys
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Explore India's top educational institutions and immerse yourself in learning and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationalTrips.map((trip, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/30 p-4 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
                onClick={() => handleCardClick(trip.title)}
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="rounded-xl h-48 w-full object-cover mb-4 border border-white/30"
                />
                <h2 className="text-2xl font-bold text-white mb-2">
                  {trip.title}
                </h2>
                <p className="text-white/80">{trip.description}</p>
              </div>
            ))}
          </div>

          {activeTrip === 'IIT Kanpur' && (
            <TripDetailCard
              title="Innovative Spirit of IIT Kanpur"
              details={iitKanpurDetails}
            />
          )}
        </div>
      </div>

      {/* Lightbox */}
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

export default EducationalTrips;
