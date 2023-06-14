
const bcrypt = require('bcrypt');

export const hashPWD = async (password) => await bcrypt.hash(password, 12);
export const checkPW = async (plain, hashed) => await bcrypt.compare(plain, hashed);