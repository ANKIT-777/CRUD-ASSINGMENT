const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection URL from .env file
const url = process.env.DB_URL;

// Database Name
const dbName = 'mydatabase';

// Function to connect to MongoDB
const connectToDB = () => {
  return mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connectToDB;
