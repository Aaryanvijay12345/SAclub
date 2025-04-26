require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');
const culturalRoutes = require('./routes/culturalTrips');
const contactRoute = require('./routes/contact');

const app = express();

const corsOptions = {
  origin: ['https://saclub.vercel.app', 'https://sa-club.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 204
};

// Apply CORS before any routes
app.use(cors(corsOptions));

// Handle OPTIONS preflight requests
app.options('*', cors(corsOptions));

app.use(express.json());

// ✅ Serve static images from /assets
app.use('/assets', express.static('assets'));

// ✅ Mount routes
app.use('/members', memberRoutes);
app.use('/', culturalRoutes);
app.use('/', contactRoute);

// ✅ Connect to MongoDB only once (Vercel keeps connections alive between calls)
let isConnected = false;

async function connectToMongo() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("MongoDB Connected");
}

app.use(async (req, res, next) => {
  await connectToMongo();
  next();
});

// ❌ Don't call app.listen()
// ✅ Instead export as Vercel function handler
module.exports = app;
