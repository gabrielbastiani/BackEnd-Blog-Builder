import prismaClient from '../../prisma';

interface ArticleRequest {
    publishDate: string;
    article_id: string;
}

class DatePublishedArticleService {
    async execute({ publishDate, article_id }: ArticleRequest) {

        const published = await prismaClient.article.update({
            where: {
                id: article_id,
            },
            data: {
                publishDate: publishDate,
            }
        });

        return published;
    }

}

export { DatePublishedArticleService }