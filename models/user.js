const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstName: { type: String, require: [true, 'Firstname is required'] },
  lastName: { type: String, require: [true, 'Lastname is required'] },
  email: { type: String, require: [true, 'Email is required'] },
  password: { type: String, require: [true, 'Password is required'], select: false, },
  profession: { type: String, require: [true, 'Profession is required'] },
  gender: { type: String, require: [true, 'Gender is required'] },
  resetToken: { type: String, default: null },
  isVerify: { type: Boolean, default: false },
  verificationToken: { type: String, default: null },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.models.User || mongoose.model('User', schema);