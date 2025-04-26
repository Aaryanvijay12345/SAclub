require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');
const culturalRoutes = require('./routes/culturalTrips');
const contactRoute = require('./routes/contact');

const app = express();

// ✅ CORS configuration
const corsOptions = {
  origin: ['https://saclub.vercel.app'], // Allowed frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Preflight request support

app.use(express.json());

// ✅ Serve static images from /assets
app.use('/assets', express.static('assets'));

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Mount routes
app.use('/members', memberRoutes);
app.use('/', culturalRoutes);
app.use('/', contactRoute);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
