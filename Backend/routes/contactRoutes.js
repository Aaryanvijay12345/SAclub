const express = require('express');
const { sendContactForm } = require('../controllers/contactcontroller');

const router = express.Router();
router.post('/contact', sendContactForm);

module.exports = router;
