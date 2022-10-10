import prismaClient from '../../prisma';

class ListExactArticleService {
    async execute({ article_id }) {
        const ExactArticle = await prismaClient.article.findUnique({
            where: {
                id: article_id
            }
        })
        return ExactArticle;
    }
}

export { ListExactArticleService }