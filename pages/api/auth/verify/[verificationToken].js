import { runMiddleware, cors } from "@/utils/utils";
import { verifyUserByEmail } from "@/controllers/userController";

const verifyEmail = async (req, res) => {
  await runMiddleware(req, res, cors);
  const { verificationToken } = req.query;
  const user = await verifyUserByEmail(verificationToken);
  if (user.error) {
    res.redirect(307, '/')
  }
  res.redirect(307, '/auth/confirmation')
}


export default verifyEmail;