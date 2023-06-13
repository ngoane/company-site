const bcrypt = require('bcrypt');

export const hashPWD = async (password) => await bcrypt.hash(password, bcrypt.genSalt());
export const checkPW = async (plain, hashed) => await bcrypt.compare(plain, hashed);