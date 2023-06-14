const bcrypt = require('bcrypt');
const fs = require('fs');
const axios = require('axios');
const formData = require('form-data');

export const hashPWD = async (password) => await bcrypt.hash(password, 12);
export const checkPW = async (plain, hashed) => await bcrypt.compare(plain, hashed);
const getEmailTemplate = fs.readFileSync('./MailTemplates/confirmEmail.html', 'utf-8');

export const sendConfirmationEmail = async (recipientEmail, recipientName, confirmationLink) => {
    const emailTemplate = getEmailTemplate;
  
    const emailContent = emailTemplate
      .replace('{recipientName}', recipientName)
      .replace('{confirmationLink}', confirmationLink)
      .replace('{confirmationLink}', confirmationLink)
      .replace('{yourName}', 'Ngoane Team');

    const DOMAIN = process.env.MAILGUN_DOMAIN;
    const API_KEY = process.env.MAILGUN_API;
    const SYSTEM_MAIL = process.env.SYSTEM_MAIL
    const URL = `https://api.mailgun.net/v3/${DOMAIN}/messages`;
    const api = axios.create({ 
        auth: {
            username: 'api',
            password: API_KEY
        }
     });

    const fData = new FormData();
    fData.append('from', `Ngoane <${SYSTEM_MAIL}>`);
    fData.append('to', recipientEmail);
    fData.append('subject', 'Email Confirmation');
    fData.append('html', emailContent);
    try {
      const res = await api.post(URL, fData);
      return res;
    } catch (err) {
      return { error: true, message: err.message };
    }
  }