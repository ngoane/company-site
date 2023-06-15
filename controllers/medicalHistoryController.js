const db = require('../utils/db');
const MedicalHistory = require('../models/MedicalHistory');

// Get all medical histories
const getAllMedicalHistories = async (req, res) => {
  try {
    const medicalHistories = await MedicalHistory.find();
    res.json(medicalHistories);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch medical histories' });
  }
};

// Get a single medical history by ID
const getMedicalHistoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const medicalHistory = await MedicalHistory.findById(id);
    if (!medicalHistory) {
      return res.status(404).json({ error: 'Medical history not found' });
    }
    res.json(medicalHistory);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch medical history' });
  }
};

// Create a new medical history
const createMedicalHistory = async (req, res) => {
  const { dateOfDiagnosis, diagnosis, placeOfDiagnosis, treatmentStatus } = req.body;

  try {
    const medicalHistory = await MedicalHistory.create({
      dateOfDiagnosis,
      diagnosis,
      placeOfDiagnosis,
      treatmentStatus,
    });
    res.status(201).json(medicalHistory);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create medical history' });
  }
};

// Update a medical history by ID
const updateMedicalHistory = async (req, res) => {
  const { id } = req.params;
  const { dateOfDiagnosis, diagnosis, placeOfDiagnosis, treatmentStatus } = req.body;

  try {
    const updatedMedicalHistory = await MedicalHistory.findByIdAndUpdate(
      id,
      { dateOfDiagnosis, diagnosis, placeOfDiagnosis, treatmentStatus },
      { new: true }
    );
    if (!updatedMedicalHistory) {
      return res.status(404).json({ error: 'Medical history not found' });
    }
    res.json(updatedMedicalHistory);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update medical history' });
  }
};

// Delete a medical history by ID
const deleteMedicalHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMedicalHistory = await MedicalHistory.findByIdAndDelete(id);
    if (!deletedMedicalHistory) {
      return res.status(404).json({ error: 'Medical history not found' });
    }
    res.json({ message: 'Medical history deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete medical history' });
  }
};

module.exports = {
  getAllMedicalHistories,
  getMedicalHistoryById,
  createMedicalHistory,
  updateMedicalHistory,
  deleteMedicalHistory,
};
