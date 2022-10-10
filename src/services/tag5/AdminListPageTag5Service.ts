import prismaClient from '../../prisma';

class AdminListPageTag5Service {
    async execute(pageTag5Admin = 1, limitTag5Admin = 3) {

        const skip = limitTag5Admin * (pageTag5Admin - 1);

        const allTags5Admin = await prismaClient.tag5.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags5Admin = await prismaClient.tag5.findMany({
            skip,
            take: limitTag5Admin,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag5e que recebeu
        const data = {
            tags5Admin,
            totalTag5Admin: allTags5Admin.length,
            total_pagesTag5Admin: Math.ceil(allTags5Admin.length / limitTag5Admin),
            current_pageTag5Admin: pageTag5Admin,
        }

        return data;

    }
}

export { AdminListPageTag5Service }