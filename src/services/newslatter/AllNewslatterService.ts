import prismaClient from '../../prisma';

class AllNewslatterService {
    async execute() {
        const findAll = await prismaClient.newslatter.findMany({
            orderBy: {
                created_at: 'desc'
             }
        })

        return findAll;
    }
}

export { AllNewslatterService }