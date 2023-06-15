const db = require('../utils/db');
const ImmunizationHistory = require('../models/ImmunizationHistory');

// Get all immunization histories
const getAllImmunizationHistories = async (req, res) => {
  try {
    const immunizationHistories = await ImmunizationHistory.find();
    res.json(immunizationHistories);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch immunization histories' });
  }
};

// Get a single immunization history by ID
const getImmunizationHistoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const immunizationHistory = await ImmunizationHistory.findById(id);
    if (!immunizationHistory) {
      return res.status(404).json({ error: 'Immunization history not found' });
    }
    res.json(immunizationHistory);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch immunization history' });
  }
};

// Create a new immunization history
const createImmunizationHistory = async (req, res) => {
  const { condition, dateReceived, manufacturer, lotNumber, administeredBy, user } = req.body;

  try {
    const immunizationHistory = await ImmunizationHistory.create({
      condition,
      dateReceived,
      manufacturer,
      lotNumber,
      administeredBy,
      user,
    });
    res.status(201).json(immunizationHistory);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create immunization history' });
  }
};

// Update an immunization history by ID
const updateImmunizationHistory = async (req, res) => {
  const { id } = req.params;
  const { condition, dateReceived, manufacturer, lotNumber, administeredBy, user } = req.body;

  try {
    const updatedImmunizationHistory = await ImmunizationHistory.findByIdAndUpdate(
      id,
      { condition, dateReceived, manufacturer, lotNumber, administeredBy, user },
      { new: true }
    );
    if (!updatedImmunizationHistory) {
      return res.status(404).json({ error: 'Immunization history not found' });
    }
    res.json(updatedImmunizationHistory);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update immunization history' });
  }
};

// Delete an immunization history by ID
const deleteImmunizationHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedImmunizationHistory = await ImmunizationHistory.findByIdAndDelete(id);
    if (!deletedImmunizationHistory) {
      return res.status(404).json({ error: 'Immunization history not found' });
    }
    res.json({ message: 'Immunization history deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete immunization history' });
  }
};

module.exports = {
  getAllImmunizationHistories,
  getImmunizationHistoryById,
  createImmunizationHistory,
  updateImmunizationHistory,
  deleteImmunizationHistory,
};
