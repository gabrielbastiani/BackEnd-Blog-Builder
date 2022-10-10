import prismaClient from '../../prisma';


class AllPublishedArticlesService {
    async execute() {
        const findAll = await prismaClient.article.findMany({
            where: {
                published: true
            },
            orderBy: {
                created_at: 'desc'
            }
        })
        return findAll;
    }
}

export { AllPublishedArticlesService }