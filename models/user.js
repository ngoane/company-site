const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true, select: false, },
  profession: String,
  gender: String,
  resetToken: String,
}, { timestamps: true });

module.exports = mongoose.models.User || mongoose.model('User', schema);