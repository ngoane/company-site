const db = require('../utils/db');
const Symptom = require('../models/Symptom');


// Get all symptoms
const getAllSymptoms = async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json(symptoms);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch symptoms' });
  }
};

// Get a single symptom by ID
const getSymptomById = async (req, res) => {
  const { id } = req.params;

  try {
    const symptom = await Symptom.findById(id);
    if (!symptom) {
      return res.status(404).json({ error: 'Symptom not found' });
    }
    res.json(symptom);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch symptom' });
  }
};

// Create a new symptom
const createSymptom = async (req, res) => {
  const { name } = req.body;
    // console.log(name);
  try {
    const symptom = await Symptom.create({ name });
    // console.log(`symptom: ${symptom}`);
    res.status(201).json(symptom);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create symptom' });
  }
};

// Update a symptom by ID
const updateSymptom = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedSymptom = await Symptom.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedSymptom) {
      return res.status(404).json({ error: 'Symptom not found' });
    }
    res.json(updatedSymptom);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update symptom' });
  }
};

// Delete a symptom by ID
const deleteSymptom = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSymptom = await Symptom.findByIdAndDelete(id);
    if (!deletedSymptom) {
      return res.status(404).json({ error: 'Symptom not found' });
    }
    res.json({ message: 'Symptom deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete symptom' });
  }
};

module.exports = {
  getAllSymptoms,
  getSymptomById,
  createSymptom,
  updateSymptom,
  deleteSymptom,
};
