const transporter = require('../config/transporter');

const sendContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Must match the authenticated Gmail account
      to: 'spiritualclubofficial@gmail.com', // Recipient (same as EMAIL_USER in this case)
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      replyTo: email, // Allows replying to the sender’s email
    });
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.log('Error sending email:', error);
    res.status(500).json({ message: 'Email failed to send.', error: error.message });
  }
};

module.exports = { sendContactForm };