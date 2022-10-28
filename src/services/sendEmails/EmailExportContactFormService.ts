import nodemailer from "nodemailer";


class EmailExportContactFormService {
    async execute() {
        const transporter = nodemailer.createTransport({
            host: "smart.iagentesmtp.com.br",
            port: 587,
            auth: {
                user: "contato@builderseunegocioonline.com",
                pass: "5c6673f3"
            }
        })

        await transporter.sendMail({
            from: '"Blog - Builder Seu Negocio Online" <contato@builderseunegocioonline.com.br>',
            to: 'gabriel.bastiani@hotmail.com.br',
            subject: "Lista de contatos do Blog",
            html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h2>Lista de Contatos do Blog</h2>
                  </div>
                  
                  <article>
                      <p>Olá!</p>
                      <p>Segue em anexo o arquivo com a listagem de contatos cadastrados no Blog?</p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Blog Builder Seu Negocio Online</h5>
                  </div>`,
            attachments: [{
                filename: 'ListaContatosBlog.xlsx',
                path: 'ListaContatosBlog.xlsx'
            }]
        });

        return {
            message: "Verifique seu E-mail",
        };

    }
}

export { EmailExportContactFormService }