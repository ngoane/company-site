const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImmunizationHistorySchema = new Schema({
  condition: {
    type: String,
    required: true,
  },
  dateReceived: {
    type: Date,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  lotNumber: {
    type: String,
    required: true,
  },
  administeredBy: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.models.ImmunizationHistory || mongoose.model('ImmunizationHistory', ImmunizationHistorySchema);