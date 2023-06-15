const mongoose = require('mongoose');

const SurgicalHistorySchema = new mongoose.Schema({
  diagnosis: {
    type: String,
    required: true,
  },
  surgeryType: {
    type: String,
    required: true,
  },
  treatmentStatus: {
    type: String,
    enum: ['Completed', 'Ongoing'],
    default: 'Completed',
  },
  surgeryDate: {
    type: Date,
    required: true,
  },
  facility: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.models.SurgicalHistory || mongoose.model('SurgicalHistory', SurgicalHistorySchema);