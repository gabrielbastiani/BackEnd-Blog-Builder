import nodemailer from "nodemailer";


class EmailExportNewslattersService {
    async execute() {
        const transporter = nodemailer.createTransport({
            host: "smart.iagentesmtp.com.br",
            port: 587,
            auth: {
                user: "contato@builderseunegocioonline.com",
                pass: "6370a655"
            }
        })

        await transporter.sendMail({
            from: '"Blog - Builder Seu Negocio Online" <contato@builderseunegocioonline.com.br>',
            to: 'gabriel.bastiani@hotmail.com.br',
            subject: "Lista de newslatters do Blog",
            html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h2>Lista de Newslatters do Blog</h2>
                  </div>
                  
                  <article>
                      <p>Olá!</p>
                      <p>Segue em anexo o arquivo com a listagem de newslatters cadastrados no Blog?</p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Blog Builder Seu Negocio Online</h5>
                  </div>`,
            attachments: [{
                filename: 'ListaDeEmails.xlsx',
                path: 'ListaDeEmails.xlsx'
            }]
        });

        return {
            message: "Verifique seu E-mail",
        };

    }
}

export { EmailExportNewslattersService }