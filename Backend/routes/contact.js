// /api/contact.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import transporter from '../config/transporter';

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['https://saclub.vercel.app', 'https://sa-club.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Create a serverless function handler
export default async function handler(req, res) {
  // Set CORS headers explicitly
  res.setHeader('Access-Control-Allow-Origin', 'https://saclub.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  
  // Handle POST request
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

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
      console.log('Email sent successfully');
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Nodemailer error:', error);
      return res.status(500).json({ message: 'Failed to send email.' });
    }
  }
  
  // Handle other HTTP methods
  return res.status(405).json({ message: 'Method not allowed' });
}