const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  branch: String,
  mobile: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
