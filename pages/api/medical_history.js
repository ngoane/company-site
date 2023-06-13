import {
    getAllMedicalHistories,
    getMedicalHistoryById,
    createMedicalHistory,
    updateMedicalHistory,
    deleteMedicalHistory
  } from '../../controllers/medicalHistoryController';
  
  export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        if (req.query.id) {
          getMedicalHistoryById(req, res);
        } else {
          getAllMedicalHistories(req, res);
        }
        break;
      case 'POST':
        createMedicalHistory(req, res);
        break;
      case 'PUT':
        if (req.query.id) {
          updateMedicalHistory(req, res);
        } else {
          res.status(400).json({ message: 'Invalid request. Medical history ID is required.' });
        }
        break;
      case 'DELETE':
        if (req.query.id) {
          deleteMedicalHistory(req, res);
        } else {
          res.status(400).json({ message: 'Invalid request. Medical history ID is required.' });
        }
        break;
      default:
        res.status(405).json({ message: 'Method Not Allowed' });
        break;
    }
  }
  
  export async function getServerSideProps() {
    const res = await fetch('https://your-api-url.com/api/medical-history');
    const medicalHistories = await res.json();
  
    return {
      props: { medicalHistories }
    };
  }
  