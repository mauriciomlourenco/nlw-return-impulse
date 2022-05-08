import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "980514e9510118",
      pass: "0a7fb4d0459f2d"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData){
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: 'Mauricio Machado Lourenço <mauricio.mchd@gmail.com>',
        subject: subject,
        html: body,
    });
    };
}