import React from 'react';
import { Circle, Sun, Star } from 'lucide-react';
import logo from '../assets/logo.png';
import homeBg from '../assets/homeBg.jpg'; // ✅ Import your local background

const Hero = () => {
  const shapes = Array(12).fill(null);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${homeBg})`,
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
              className="text-purple-600"
              style={{
                width: size,
                height: size,
                opacity: opacity,
              }}
            />
          </div>
        );
      })}

      {/* 🔥 Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="py-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            “Learn,
            <span className="inline-block ml-2 mr-2">Grow</span>
            & Serve”
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our spiritual community to explore meditation, mindfulness, and personal growth through various spiritual activities and practices.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#activities"
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            >
              Explore Activities
            </a>
            <a
              href="#about"
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full hover:bg-purple-50 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
