// api/symptom.js
// console.log(process.env.mongoURI)

import { getAllSymptoms, getSymptomById, createSymptom, updateSymptom, deleteSymptom } from '../../controllers/symptomController';

export default function handler(req, res) {
    const { method } = req;
  
    // Handle GET request to fetch all symptoms
    if (method === 'GET') {
      getAllSymptoms(req, res);
    }
    // Handle GET request to fetch a single symptom
    else if (method === 'GET' && req.query.id) {
      getSymptomById(req, res);
    }
    // Handle POST request to create a new symptom
    else if (method === 'POST') {
      createSymptom(req, res);
    }
    // Handle PUT request to update a symptom
    else if (method === 'PUT' && req.query.id) {
      updateSymptom(req, res);
    }
    // Handle DELETE request to delete a symptom
    else if (method === 'DELETE' && req.query.id) {
      deleteSymptom(req, res);
    }
    // Handle unsupported HTTP methods
    else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  