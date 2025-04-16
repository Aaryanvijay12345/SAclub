const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

router.post('/', async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json({ message: 'Member saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving member', error: err.message });
  }
});

module.exports = router;
