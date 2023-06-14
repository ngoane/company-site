// api/symptomTracker.js

import { getAllSymptomTrackers, getOneSymptomTracker, createSymptomTracker, updateSymptomTracker, deleteSymptomTracker } from '../../controllers/symptomTrackerController';

export default function handler(req, res) {
    const { method } = req;
  
    // Handle GET request to fetch all symptom trackers
    if (method === 'GET') {
      getAllSymptomTrackers(req, res);
    }
    // Handle GET request to fetch a single symptom tracker
    else if (method === 'GET' && req.query.id) {
      getOneSymptomTracker(req, res);
    }
    // Handle POST request to create a new symptom tracker
    else if (method === 'POST') {
      createSymptomTracker(req, res);
    }
    // Handle PUT request to update a symptom tracker
    else if (method === 'PUT' && req.query.id) {
      updateSymptomTracker(req, res);
    }
    // Handle DELETE request to delete a symptom tracker
    else if (method === 'DELETE' && req.query.id) {
      deleteSymptomTracker(req, res);
    }
    // Handle unsupported HTTP methods
    else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  