import { createUser } from '../../controllers/userController';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the POST request for creating a user
    return createUser(req, res);
  }

  // Handle other types of requests (e.g., GET, PUT, DELETE)
  res.status(405).json({ error: 'Method Not Allowed' });
}
