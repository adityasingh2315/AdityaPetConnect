require('dotenv').config();
const nodemailer = require('nodemailer');

// Step 1: Setup transporter with your credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,   // from .env
    pass: process.env.EMAIL_PASS    // from .env (app password)
  }
});

// Step 2: Define mail content
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'lci2023003@iiitl.ac.in', // your real email
  subject: '✅ TEST Mail from AdityaPetConnect',
  html: `
    <h2>This is a test email!</h2>
    <p>If you're seeing this, your Gmail + nodemailer setup works correctly ✅</p>
  `
};

// Step 3: Send mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Error sending email:', error);
  } else {
    console.log('✅ Email sent successfully:', info.response);
  }
});
