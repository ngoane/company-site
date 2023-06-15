const mongoose = require('mongoose');

const symptomTrackerSchema = new mongoose.Schema({
  symptomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Symptom',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  possibleTrigger: {
    type: String,
    required: true,
  },
  howYouFeel: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for authentication
    // required: true,
  },
});


module.exports = mongoose.models.SymptomTracker || mongoose.model('SymptomTracker', symptomTrackerSchema);