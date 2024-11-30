// // Method 1: Using Nodemailer (Recommended for Node.js)
// // const nodemailer = require('nodemailer');
// import nodemailer from 'nodemailer';

// async function sendEmailNodemailer() {
//     // Create a transporter using SMTP
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'bikash.mishra2079',
//             pass: 'bikash123'  // Use App Password, not regular password
//         }
//     });

//     // Email options
//     let mailOptions = {
//         from: 'bikash.mishra2079',
//         to: 'sowohi1451@bflcafe.com',
//         subject: 'Test Email',
//         text: 'This is a test email sent from Node.js',
//         // Optional HTML version
//         html: '<h1>Welcome</h1><p>This is a test email</p>'
//     };

//     try {
//         // Send email
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

// // Method 2: Using Gmail API with OAuth2 (More secure)
// const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;

// async function sendEmailGmailAPI() {
//     // Create OAuth2 client
//     const oauth2Client = new OAuth2(
//         'YOUR_CLIENT_ID',     // Google Cloud Console Client ID
//         'YOUR_CLIENT_SECRET', // Google Cloud Console Client Secret
//         'https://developers.google.com/oauthplayground' // Redirect URL
//     );

//     // Set credentials (you'll need to handle token refresh)
//     oauth2Client.setCredentials({
//         refresh_token: 'YOUR_REFRESH_TOKEN'
//     });

//     // Get access token
//     const accessToken = await new Promise((resolve, reject) => {
//         oauth2Client.getAccessToken((err, token) => {
//             if (err) {
//                 reject('Failed to create access token');
//             }
//             resolve(token);
//         });
//     });

//     // Create Gmail service
//     const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

//     // Compose email
//     const rawMessage = [
//         'Content-Type: text/plain; charset="UTF-8"',
//         'MIME-Version: 1.0',
//         'To: recipient@example.com',
//         'From: your-email@gmail.com',
//         'Subject: Test Email',
//         '',
//         'This is a test email sent via Gmail API'
//     ].join('\n');

//     // Base64 encode the message
//     const encodedMessage = Buffer.from(rawMessage)
//         .toString('base64')
//         .replace(/\+/g, '-')
//         .replace(/\//g, '_');

//     try {
//         // Send email
//         const response = await gmail.users.messages.send({
//             userId: 'me',
//             requestBody: {
//                 raw: encodedMessage
//             }
//         });
//         console.log('Email sent:', response.data);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

// // Bonus: Browser-based email sending with EmailJS (Client-side)
// function sendEmailClientSide() {
//     // Requires EmailJS library and account setup
//     emailjs.send(
//         "YOUR_SERVICE_ID",    // EmailJS Service ID
//         "YOUR_TEMPLATE_ID",   // EmailJS Template ID
//         {
//             to_email: "recipient@example.com",
//             from_name: "Your Name",
//             message: "Test email content"
//         },
//         "YOUR_USER_ID"        // EmailJS Public Key
//     ).then(
//         response => console.log('Email sent!', response),
//         error => console.error('Email send failed:', error)
//     );
// }

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </main>
    )
}