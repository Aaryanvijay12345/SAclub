import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Events from './components/Events';
import Contact from './components/Contact';
import About from './components/About';
import EventsDetail from './components/EventsDetail';
import Alumni from './components/Alumni'; // ⬅️ Import Alumni component
import Team from './components/Team';
import Trips from './components/Trips';
import HistoricalTrips from './components/HistoricalTrips';
import CulturalTrips from './components/CulturalTrips';
import EducationalTrips from './components/EducationalTrips';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';

// import Alumni from './components/Alumni';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/eventsDetail" element={<EventsDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/historical-trips" element={<HistoricalTrips />} />
        <Route path="/cultural-trips" element={<CulturalTrips />} />
        <Route path="/educational-trips" element={<EducationalTrips />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/contactUs" element={<ContactUs />} />
      


          <Route path="/" element={
            <>
              <Hero />
              <Activities />
              <Events />
              <Contact />
           
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;