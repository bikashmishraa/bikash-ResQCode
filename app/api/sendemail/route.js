// app/api/send-email/route.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // or use another SMTP service
  auth: {
    user: 'bikash.mishra2079@gmail.com',  // Environment variable for email address
    pass: '@#pple123%',  // Environment variable for app password
  },
});

export async function POST(req) {
  const { email, name, message } = await req.json();

  const nodemailer = await import('nodemailer');  // Dynamically import Nodemailer

  const transporter = nodemailer.default.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'API Alert Notification',
      text: `Hello ${name},\n\n${message}\n\nBest regards,\nYour Team`,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: 'Error sending email', error: error.message }),
      { status: 500 }
    );
  }
}
