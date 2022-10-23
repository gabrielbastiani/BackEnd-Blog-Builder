import prismaClient from '../../prisma';


class ListExactArticleService {
    async execute({ title }) {
        const ExactArticle = await prismaClient.article.findUnique({
            where: {
                title: title
            }
        })
        return ExactArticle;
    }
}

export { ListExactArticleService }