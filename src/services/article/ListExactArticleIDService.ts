import prismaClient from '../../prisma';


class ListExactArticleIDService {
    async execute({ article_id }) {
        const ExactArticle = await prismaClient.article.findUnique({
            where: {
                id: article_id
            }
        })
        return ExactArticle;
    }
}

export { ListExactArticleIDService }