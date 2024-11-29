'use client'
// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';
import { useEffect } from 'react';
// Configure the email transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or use SMTP service
  auth: {
    user: process.env.NEXT_USER, // your email
    pass: process.env.NEXT_PASSWORD, // your email password or app-specific password
  },
});

// Function to send email
const sendAlertEmail = (users, alertMessage) => {
  const emailPromises = users.map((user) => {
    return transporter.sendMail({
      from: 'bikash.mishra2079@gmail.com', // sender address
      to: user.email, // receiver address
      subject: 'API Alert Notification', // subject line
      text: `Dear ${user.name},\n\n${alertMessage}\n\nBest regards,\nYour Team`, // plain text body
    });
  });
  console.log("email send")

  return Promise.all(emailPromises);
};

// Trigger email on API alert
const handleApiAlert = async (alert) => {
  try {
    // Example users (fetch this from your database)
    const users = [
      { name: 'User1', email: 'imbcm10@gmail.com' },
      { name: 'User2', email: 'sowohi1451@bflcafe.com' },
    ];

    // Alert message
    const alertMessage = `An alert has been triggered: ${alert}`;

    // Send emails
    await sendAlertEmail(users, alertMessage);
    console.log('Alert emails sent successfully!');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

// Example API alert trigger
handleApiAlert('High server usage detected.');

export default function Page() {
    useEffect(() => {
       handleApiAlert('High server usage detected.'); 
    },[])
  return (
    <div>
     <h1>Email sender</h1>
    </div>
  );
}