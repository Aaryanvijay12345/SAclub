// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const transporter = require('../config/transporter'); // Adjust if your transporter file is elsewhere

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'spiritualclubofficial@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

module.exports = router;
