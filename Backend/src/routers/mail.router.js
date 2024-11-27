    const express = require("express");
    const nodemailer = require("nodemailer");
    require("dotenv").config();

    const router = express.Router();
    

    // POST route to send a welcome email
    router.post("/send-welcome-email", async (req, res) => {
        console.log(req.body); 
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        try {
            // Configure the mail transporter
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // Mail options
            const mailOptions = {
                from: `"Your Company" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: " A Warm Welcome to KANISHKA DHABA! 🌟",
                text: "Welcome! We’re so thrilled to have you join the  KANISHKA DHABA family! 🎉 Here at our place, it’s all about good food, hearty laughs, and creating memories that feel like home. Whether you’re here to dig into your favorite dish or explore something new, we promise to serve you with love and a sprinkle of happiness.Got any favorites or suggestions? We’d love to hear them – your experience matters to us. And hey, next time you visit, feel free to say hi – we’d love to make your day even more special!Thanks for choosing us, and we can’t wait to serve you soon. Let the delicious journey begin!With warmth and good vibes, \n The KANISHKA DHABA Team.</p>",
               
            };

            // Send email
            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: "Welcome email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "Failed to send welcome email" });
        }
    });

    module.exports = router;
