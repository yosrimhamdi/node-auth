import nodemailer from 'nodemailer';

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD, MAIL_FROM } =
  process.env;

class Mailer {
  constructor() {
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

  async send(html, to) {
    return this.transporter.sendMail({
      from: MAIL_FROM,
      to,
      subject: 'Hello ✔',
      text: 'Hello world?',
      html,
    });
  }

  async welcome(to) {
    return this.send('<b>Hello world?</b>', to);
  }
}

export default Mailer;
