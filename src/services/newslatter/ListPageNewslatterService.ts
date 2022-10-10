import prismaClient from '../../prisma';

class ListPageNewslatterService {
    async execute(pageNews = 1, limitNews = 9) {

        const skip = limitNews * (pageNews - 1);

        const allNewslatter = await prismaClient.newslatter.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const newslatter = await prismaClient.newslatter.findMany({
            skip,
            take: limitNews,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            newslatter,
            totalNews: allNewslatter.length,
            total_pagesNews: Math.ceil(allNewslatter.length / limitNews),
            current_pageNews: pageNews,
        }

        return data;

    }
}

export { ListPageNewslatterService }