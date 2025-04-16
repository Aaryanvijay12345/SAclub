// routes/culturalTrips.js
const express = require('express');
const router = express.Router();

router.get('/trips', (req, res) => {
  res.json([
    {
      title: 'Vrindavan',
      description: 'Experience the divine land of Krishna with vibrant celebrations like Holi and Janmashtami.',
      image: 'vrindavan.png',
    },
    {
      title: 'Jagannath Puri',
      description: 'Witness the grand Rath Yatra and immerse in the spiritual aura of Puri temple.',
      image: 'puri.png',
    },
  ]);
});

router.get('/trips/vrindavan', (req, res) => {
  res.json([
    { image: 'vrindavan1.png', description: 'Sessions by the Spiritual Masters.' },
    { image: 'vrindavan2.png', description: 'Group Photo' },
    { image: 'vrindavan3.png', description: 'ISKCON Vrindava visit' },
    { image: 'vrindavan4.png', description: 'Banke Bihari Temple – a spiritual hub where devotion meets tradition.' },
    { image: 'vrindavan5.png', description: 'Holi Festival – where colors meet divine love and joy.' },
    { image: 'vrindavan6.png', description: 'Yamuna Ghats – serene evenings of aarti and Krishna katha.' },
    { image: 'vrindavan7.png', description: 'Delicious Prasadam' },
    { image: 'vrindavan8.png', description: 'Holi Festival – where colors meet divine love and joy.' },
  ]);
});

router.get('/trips/puri', (req, res) => {
  const puriDetails = [
    'Jagannath Temple – one of the Char Dham pilgrimage sites.',
    'Rath Yatra – the chariot festival that draws millions in devotion.',
    'Golden Beach – a tranquil escape after a spiritual journey.',
  ];
  const details = [];
  for (let i = 0; i < 3; i++) {
    details.push(...puriDetails.map((desc) => ({ image: 'puri.png', description: desc })));
  }
  res.json(details);
});

module.exports = router;
