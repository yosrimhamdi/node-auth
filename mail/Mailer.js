import nodemailer from 'nodemailer';
import pug from 'pug';
import { htmlToText } from 'html-to-text';
import { resolve } from 'path';

const { MAIL_HOST, MAIL_PORT } = process.env;
const { MAIL_PASSWORD, MAIL_FROM, MAIL_USER } = process.env;

class Mailer {
  constructor(user) {
    this.user = user;

    this.transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      secure: false,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const path = resolve(`views/email/${template}.pug`);

    const html = pug.renderFile(path, this.user);

    await this.transporter.sendMail({
      from: MAIL_FROM,
      to: this.user.email,
      subject,
      text: htmlToText(html),
      html,
    });
  }
}

export default Mailer;
