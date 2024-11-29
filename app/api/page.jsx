import React from 'react'

const page = () => {
    // Client-side code
const sendEmail = async () => {
    const response = await fetch('/api/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'sowohi1451@bflcafe.com',
        name: 'User',
        message: 'This is an alert message.',
      }),
    });
  
    const data = await response.json();
    if (data.success) {
      console.log('Email sent successfully!');
    } else {
      console.error('Error sending email:', data.message);
    }
  };
  
  return (
    <div>
        <h1>page api</h1>
    </div>
  )
}

export default page