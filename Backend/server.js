require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberRoutes = require('./routes/memberRoutes');
const culturalRoutes = require('./routes/culturalTrips');
const contactRoute = require('./routes/contact');


const app = express();
app.use(cors());
app.use(express.json());

// Serve static images from /assets
app.use('/assets', express.static('assets'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.use('/api/members', memberRoutes);
// Mount the trip routes
app.use('/api', culturalRoutes);

app.use('/api', contactRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});