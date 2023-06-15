const db = require('../utils/db');
const TransfusionHistory = require('../models/TransfusionHistory');

// Get all transfusion histories
const getAllTransfusionHistories = async (req, res) => {
  try {
    const transfusionHistories = await TransfusionHistory.find();
    res.json(transfusionHistories);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch transfusion histories' });
  }
};

// Get a single transfusion history by ID
const getTransfusionHistoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const transfusionHistory = await TransfusionHistory.findById(id);
    if (!transfusionHistory) {
      return res.status(404).json({ error: 'Transfusion history not found' });
    }
    res.json(transfusionHistory);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch transfusion history' });
  }
};

// Create a new transfusion history
const createTransfusionHistory = async (req, res) => {
  const { dateOfTransfusion, healthFacility, productTransfused, volume, user } = req.body;

  try {
    const transfusionHistory = await TransfusionHistory.create({
      dateOfTransfusion,
      healthFacility,
      productTransfused,
      volume,
      user,
    });
    res.status(201).json(transfusionHistory);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create transfusion history' });
  }
};

// Update a transfusion history by ID
const updateTransfusionHistory = async (req, res) => {
  const { id } = req.params;
  const { dateOfTransfusion, healthFacility, productTransfused, volume, user } = req.body;

  try {
    const updatedTransfusionHistory = await TransfusionHistory.findByIdAndUpdate(
      id,
      { dateOfTransfusion, healthFacility, productTransfused, volume, user },
      { new: true }
    );
    if (!updatedTransfusionHistory) {
      return res.status(404).json({ error: 'Transfusion history not found' });
    }
    res.json(updatedTransfusionHistory);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update transfusion history' });
  }
};

// Delete a transfusion history by ID
const deleteTransfusionHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTransfusionHistory = await TransfusionHistory.findByIdAndDelete(id);
    if (!deletedTransfusionHistory) {
      return res.status(404).json({ error: 'Transfusion history not found' });
    }
    res.json({ message: 'Transfusion history deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete transfusion history' });
  }
};

module.exports = {
  getAllTransfusionHistories,
  getTransfusionHistoryById,
  createTransfusionHistory,
  updateTransfusionHistory,
  deleteTransfusionHistory,
};
