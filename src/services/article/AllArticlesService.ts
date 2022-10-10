import prismaClient from '../../prisma';

class AllArticlesService {
    async execute() {
        const findAll = await prismaClient.article.findMany({
            orderBy: {
                created_at: 'desc'
            }
        })
        return findAll;
    }
}

export { AllArticlesService }