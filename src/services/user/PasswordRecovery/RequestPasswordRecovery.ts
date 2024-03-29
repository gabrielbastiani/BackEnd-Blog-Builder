import prismaClient from "../../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');


interface RecoveryRequest {
  email: string;
}

class RequestPasswordRecovery {
  async execute({ email }: RecoveryRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw {
        error: { field: "email", message: "Conta não encontrada." },
        code: 400,
      };
    }

    const recovery = await prismaClient.passwordRecovery.create({
      data: {
        email,
      },
    });

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
      to: user.email,
      subject: "Recuperação de senha",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Recupere sua senha!</h2>
            </div>
            
            <article>
                <p>Olá, ${user.name}!</p>
                <p>Voce esqueceu a sua senha?</p>
                <p><a href="http://localhost:3000/recover?recovery_id=${recovery.id}">CLIQUE AQUI</a>, para crair uma nova senha de acesso.</p>
                <p>Você será redirecionado a uma página em nosso blog onde poderá cadastrar uma nova senha com segurança!</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Blog Builder Seu Negocio Online</h5>
            </div>`,
    });


    return {
      message: "Verifique seu E-mail",
    };
  }
}

export { RequestPasswordRecovery };