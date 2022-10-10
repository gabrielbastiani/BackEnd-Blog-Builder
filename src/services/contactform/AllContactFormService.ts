import prismaClient from '../../prisma';

class AllContactFormService {
    async execute() {
        const findAll = await prismaClient.contactform.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        return findAll;
        
    }
}

export { AllContactFormService }