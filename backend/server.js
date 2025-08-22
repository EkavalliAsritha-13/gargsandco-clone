const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("📩 Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for the user (confirmation)
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // This sends to the user's inbox
      subject: subject ? `Re: ${subject}` : "Thank you for contacting us",
      text: `Hi ${name},

Thank you for reaching out! We received your message:

----------------------
${message}
----------------------

We will get back to you as soon as possible.

Best regards,
Garbs & Co Team`,
    };

    // Optional: send yourself a copy as well
    const notifySelfMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject ? `New message from ${name}: ${subject}` : `New contact form submission from ${name}`,
      text: `Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}
Message: ${message}`,
    };

    await transporter.sendMail(confirmationMailOptions);
    await transporter.sendMail(notifySelfMailOptions);

    console.log("✅ Confirmation email sent to user and notification sent to self!");
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
