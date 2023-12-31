import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export default function handler(req, res) {
  const transporter = nodemailer.createTransport({
    service: 'smtp',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'christglorycommunitydevelopmen@gmail.com',
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: 'christglorycommunitydevelopmen@gmail.com',
    to: 'emmanueladediran85@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + req.body.phone 
    + req.body.date + req.body.occupation + req.body.address +" | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Phone: ${req.body.phone}</p><p>Address: ${req.body.address}</p><p>Occupation: ${req.body.occupation}</p><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
    
    res.status(500).json({ message: 'Failed to send email.' });
    } else {
    
    res.status(200).json({ message: 'Email sent successfully.' });
    }
    });
    }