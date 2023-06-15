import User from "@/models/user";
import { hashPWD } from "@/utils/utils";
import { connect, mongoose } from "mongoose";
import uuid4 from "uuid4";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
      return;
    }
    await connect(process.env.MONGO_URI);
}

export const getUserByEmail = async ( email, selectPW=false) => {
  try {
    await connectDB();
  } catch (err) {
    return {error: true, message: 'Connection to db failed', err};
  }
  if (selectPW) {
    const user = await User.findOne( { email }).select('+password');
    return user
  }
  const user = await User.findOne({ email });
  return user;
}

const userExists = async ( email ) => {
  const user = getUserByEmail(email);
  if (!user.length) {
    return false;
  }
  return true;
}

export const createUser = async (firstName, lastName, email, phoneNumber, password, gender, profession) => {
  try {
    await connectDB();
  } catch (err) {
    return {error: true, message: 'Connection to db failed', err};
  }
  const isUser = await userExists(email);
  if (isUser) {
    return {error: true, message: 'User already exists' };
  }
  const hashedPW = await hashPWD(password);
  const verificationToken = uuid4();
  const user = new User({ firstName, lastName, email, phoneNumber, password: hashedPW, gender, profession, verificationToken });
  try {
    await user.save()
  } catch {
    return {error: true, message: 'Unable to create the user; make sure you are filling all require fields'};
  }
  return user;
};

export const verifyUserByEmail = async ( verificationToken ) => {
  try {
    await connectDB();
  } catch (err) {
    return {error: true, message: 'Connection to db failed', err};
  }
  const user = await User.findOneAndUpdate({ verificationToken }, { verificationToken: null, isVerify: true });
  if (!user) {
    return { error: true, message: 'Verification token is not associated with any user'}
  }
  return user;
}