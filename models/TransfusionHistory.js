const mongoose = require('mongoose');

const { Schema } = mongoose;

const transfusionHistorySchema = new Schema({
  dateOfTransfusion: {
    type: Date,
    required: true,
  },
  healthFacility: {
    type: String,
    required: true,
  },
  productTransfused: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.models.TransfusionHistory || mongoose.model('TransfusionHistory', transfusionHistorySchema);