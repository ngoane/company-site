import {
    getAllTransfusionHistories,
    getTransfusionHistoryById,
    createTransfusionHistory,
    deleteTransfusionHistory,
    updateTransfusionHistory,
  } from '../../../controllers/transfusionHistoryController';
  
  export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        if (req.query.id) {
          getTransfusionHistoryById(req, res);
        } else {
          getAllTransfusionHistories(req, res);
        }
        break;
      case 'POST':
        createTransfusionHistory(req, res);
        break;
      case 'DELETE':
        deleteTransfusionHistory(req, res);
        break;
      case 'PUT':
        updateTransfusionHistory(req, res);
        break;
      default:
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
        break;
    }
  }
  