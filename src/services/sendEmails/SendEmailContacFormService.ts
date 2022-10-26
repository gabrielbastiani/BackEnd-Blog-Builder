import nodemailer from "nodemailer";


class SendEmailContacFormService {
  async execute() {

    const transporter = nodemailer.createTransport({
      host: "smart.iagentesmtp.com.br",
      port: 587,
      auth: {
        user: "contato@builderseunegocioonline.com",
        pass: "45839a96"
      }
    })

    await transporter.sendMail({
      from: '"Blog - Builder Seu Negocio Online" <contato@builderseunegocioonline.com.br>',
      to: 'gabriel.bastiani@hotmail.com.br',
      subject: "Mensagem recebida no Blog",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Mensagem do formulario de contato no Blog!</h2>
            </div>
            
            <article>
                <p>Você acaba de receber uma nova mensagem de um visitante em seu Blog.</p>
                <p>Para ler a mensagem, acesse o seu painel administrativo na sua conta no Blog, e navegue até o menu "Contatos".</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Blog Builder Seu Negocio Online</h5>
            </div>`,
    });


    return;
  }
}

export { SendEmailContacFormService };