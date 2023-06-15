import {
    getAllImmunizationHistories,
    getImmunizationHistoryById,
    createImmunizationHistory,
    updateImmunizationHistory,
    deleteImmunizationHistory,
  } from '../../../controllers/immunizationHistoryController';
  
  export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        if (req.query.id) {
          getImmunizationHistoryById(req, res);
        } else {
          getAllImmunizationHistories(req, res);
        }
        break;
      case 'POST':
        createImmunizationHistory(req, res);
        break;
      case 'PUT':
        updateImmunizationHistory(req, res);
        break;
      case 'DELETE':
        deleteImmunizationHistory(req, res);
        break;
      default:
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
        break;
    }
  }
  