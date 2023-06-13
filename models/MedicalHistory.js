const mongoose = require('mongoose');

const medicalHistorySchema = new mongoose.Schema({
  dateOfDiagnosis: {
    type: Date,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  placeOfDiagnosis: {
    type: String,
    required: true,
  },
  treatmentStatus: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed', 'Not Required'],
    default: 'Not Started',
  },
}, { timestamps: true });

module.exports = mongoose.models.MedicalHistory || mongoose.model('MedicalHistory', medicalHistorySchema);