import nodemailer from "nodemailer";

const host = process.env.EMAIL_HOST;
const port = Number(process.env.EMAIL_PORT);
const email = process.env.EMAIL_EUREKA;
const pass = process.env.PASSWORD_EUREKA;

export const createEmail = ({ to, html = "", subject = "" }) => {
  console.log(to, html, subject )
  return { from: `"Miolo Mole" <${email}>`, to, subject, html };
};

export const transport = nodemailer.createTransport({ host, port, auth: { user: email, pass } });
