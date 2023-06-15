const { createUser } = require("@/controllers/userController");
import { runMiddleware, sendConfirmationEmail } from '@/utils/utils';
import Cors from 'cors'

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
  })
   

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
  const { host } = req.headers;
  const redirectURL = `${host}/api/auth/verify/${user.verificationToken}`;
  const name = `${firstName} ${lastName}`;
  await sendConfirmationEmail(email, name, redirectURL);
  return res.status(201).json({ user});
}

export default signUp;