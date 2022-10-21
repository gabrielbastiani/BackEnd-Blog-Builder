import prismaClient from '../../prisma';
const CronJob = require('cron').CronJob;
import moment from 'moment';
import nodemailer from "nodemailer";

interface ArticleRequest {
    publishDate: string;
    article_id: string;
}

class AllDatePublisheService {
    async execute({ publishDate, article_id }: ArticleRequest) {

        const allDate = await prismaClient.article.findFirst({
            where: {
                id: article_id,
                publishDate: publishDate
            }
        });

        const titleArticle = allDate.title;

        const dateAll = allDate.publishDate;
        const dateFuture = moment(dateAll).format('DD/MM/YYYY HH:mm');

        console.log("Data futura:", dateFuture)

        const job = new CronJob('0 * * * * *', async () => {

            const nowDate = new Date();
            const dateNow = new Intl.DateTimeFormat('pt-BR', {dateStyle: 'short', timeStyle: 'short'}).format(nowDate);

            console.log("Data atual:", dateNow)

            if (dateNow === dateFuture) {

                console.log('Publicado na data')

                const dataPublished = await prismaClient.article.update({
                    where: {
                        id: article_id,
                    },
                    data: {
                        published: true,
                    }
                });

                const transporter = nodemailer.createTransport({
                    host: "smtplw.com.br",
                    port: 587,
                    auth: {
                        user: "gabrielbastiani",
                        pass: "xbZwBGam6780"
                    }
                })

                await transporter.sendMail({
                    from: '"Blog - Builder Seu Negocio Online" <contato@smtpemailwebapp.com.br>',
                    to: 'gabriel.bastiani@hotmail.com.br',
                    subject: "Artigo programado no blog",
                    html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                              <h2>Artigo programado no blog</h2>
                          </div>
                          
                          <article>
                              <p>Olá!</p>
                              <p>O artigo de titulo: <b>"${titleArticle}"</b>, programado para ser publicado na data <b>${dateFuture}</b> foi publicado no blog!</p>
                          </article>
                          
                          <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                              <h5>Blog Builder Seu Negocio Online</h5>
                          </div>`,
                });

                return dataPublished;
            }

        }, null, true);

    }

}

export { AllDatePublisheService }