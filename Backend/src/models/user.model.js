const mongoose = require('mongoose');

// Create a user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Ensures no leading or trailing spaces in the name
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures the email is unique
      lowercase: true, // Converts the email to lowercase
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'], // Roles can be admin or user
      default: 'user',
    },
    createdAt: {
      type: Date,
      default: Date.now, // Timestamp for when the user is created
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Timestamp for when the user was last updated
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create a model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
