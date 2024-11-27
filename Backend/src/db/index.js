require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URI;  // Ensure this matches the .env variable


mongoose.connect(connectionString)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log("Error connecting to MongoDB:", err);
    });

