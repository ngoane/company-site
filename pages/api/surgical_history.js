import {
    getAllSurgicalHistories,
    getSurgicalHistoryById,
    createSurgicalHistory,
    deleteSurgicalHistory,
    updateSurgicalHistory,
  } from '../../../controllers/surgicalHistoryController';
  
  export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        if (req.query.id) {
          getSurgicalHistoryById(req, res);
        } else {
          getAllSurgicalHistories(req, res);
        }
        break;
      case 'POST':
        createSurgicalHistory(req, res);
        break;
      case 'DELETE':
        deleteSurgicalHistory(req, res);
        break;
      case 'PUT':
        updateSurgicalHistory(req, res);
        break;
      default:
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
        break;
    }
  }
  