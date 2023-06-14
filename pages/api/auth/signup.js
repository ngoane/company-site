const { createUser } = require("@/controllers/userController");
import { sendConfirmationEmail } from '@/utils/utils';
import Cors from 'cors'
const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
  })
  
  function runMiddleware( req, res, fn ) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }

const signUp = async (req, res) => {
  await runMiddleware(req, res, cors)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed'});
  }
  const { firstName, lastName, email, phoneNumber, password, gender, profession } = req.body;
  const user = await createUser(firstName, lastName, email, phoneNumber, password, gender, profession);
  if (user.error) {
    return res.status(400).json({ user });
  }
  const name = `${firstName} ${lastName}`;
  await sendConfirmationEmail(email, name, 'google.com');
  return res.status(201).json({ user});
}

export default signUp;