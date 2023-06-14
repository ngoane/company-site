const db = require('../utils/db');
const User = require('../models/User');

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    // Extract user data from the request body
    const { firstName, lastName, email, password, profession, gender } = req.body;

    // Create a new User instance
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      profession,
      gender,
    });

    // Save the user to the database
    await user.save();

    // Respond with the created user object
    res.status(201).json(user);
  } catch (error) {
    // Handle any errors that occur during the creation of the user
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Other controller functions for user operations can be added here

module.exports = { createUser };
