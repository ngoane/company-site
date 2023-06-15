const SymptomTracker = require('../models/SymptomTracker');
const db = require('../utils/db');

// Get all symptom trackers for a user
const getAllSymptomTrackers = async (req, res) => {
  // const { userId } = req.params;

  // try {
  //   const symptomTrackers = await SymptomTracker.find({ userId });
  //   res.json(symptomTrackers);
  // } catch (error) {
  //   res.status(500).json({ error: 'Unable to fetch symptom trackers' });
  // }

  // const { userId } = req.params;

  try {
    const symptomTrackers = await SymptomTracker.find().populate('symptomId');
    res.json(symptomTrackers);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch symptom trackers' });
  }
};

// Get a single symptom tracker by ID
const getOneSymptomTracker = async (req, res) => {
    const { id } = req.params;
  
    try {
      const symptomTracker = await SymptomTracker.findById(id);
      if (!symptomTracker) {
        return res.status(404).json({ error: 'Symptom tracker not found' });
      }
      res.json(symptomTracker);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch symptom tracker' });
    }
  };

// Create a new symptom tracker for a user
const createSymptomTracker = async (req, res) => {
  // const { userId, symptomId, date, time, possibleTrigger, howYouFeel } = req.body;
  console.log(req.body)
  const { symptomId, date, time, possibleTrigger, howYouFeel } = req.body;

  try {
    const symptomTracker = await SymptomTracker.create({
      // userId,
      symptomId,
      date,
      time,
      possibleTrigger,
      howYouFeel,
    });
    res.status(201).json(symptomTracker);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Unable to create symptom tracker' });
  }
};

// Update a symptom tracker by ID
const updateSymptomTracker = async (req, res) => {
  const { id } = req.params;
  const { symptomId, date, time, possibleTrigger, howYouFeel } = req.body;

  try {
    const updatedSymptomTracker = await SymptomTracker.findByIdAndUpdate(
      id,
      { symptomId, date, time, possibleTrigger, howYouFeel },
      { new: true }
    );
    if (!updatedSymptomTracker) {
      return res.status(404).json({ error: 'Symptom tracker not found' });
    }
    res.json(updatedSymptomTracker);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update symptom tracker' });
  }
};

// Delete a symptom tracker by ID
const deleteSymptomTracker = async (req, res) => {
  const { id } = req.query;

  try {
    const deletedSymptomTracker = await SymptomTracker.findByIdAndDelete(id);
    if (!deletedSymptomTracker) {
      return res.status(404).json({ error: 'Symptom tracker not found' });
    }
    res.json({ message: 'Symptom tracker deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete symptom tracker' });
  }
};

module.exports = {
  getAllSymptomTrackers,
  getOneSymptomTracker,
  createSymptomTracker,
  updateSymptomTracker,
  deleteSymptomTracker,
};
