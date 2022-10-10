import prismaClient from '../../prisma';

class AllCategorysService {
    async execute() {
        const findAll = await prismaClient.category.findMany({
            orderBy: {
                created_at: 'desc'
            }
        })
        return findAll;
    }
}

export { AllCategorysService }