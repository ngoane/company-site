const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURI = process.env.mongoURI;

// Establish the connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Handle connection events
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Export the database connection
module.exports = db;
