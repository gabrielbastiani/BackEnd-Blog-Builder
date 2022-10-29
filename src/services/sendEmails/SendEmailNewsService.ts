import nodemailer from "nodemailer";
require('dotenv/config');


class SendEmailNewsService {
  async execute() {

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 587,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    })

    await transporter.sendMail({
      from: '"Blog - Builder Seu Negocio Online" <contato@builderseunegocioonline.com.br>',
      to: 'gabriel.bastiani@hotmail.com.br',
      subject: "Novo contato em sua Newslatter",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Cadastro contato newslatters no Blog!</h2>
            </div>
            
            <article>
                <p>Você acaba de receber um novo cadastro de NewsLatters em seu Blog.</p>
                <p>Para verificar esse cadastro, basta acessar seu painel administrativo da sua conta no Blog, e navegar até o menu "Lista de E-mails".</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Blog Builder Seu Negocio Online</h5>
            </div>`,
    });


    return {
      message: "Obrigado pela mensagem, retornaremos em breve!",
    };
  }
}

export { SendEmailNewsService };