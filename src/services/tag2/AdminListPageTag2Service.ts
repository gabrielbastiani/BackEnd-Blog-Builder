import prismaClient from '../../prisma';

class AdminListPageTag2Service {
    async execute(pageTag2Admin = 1, limitTag2Admin = 3) {

        const skip = limitTag2Admin * (pageTag2Admin - 1);

        const allTags2Admin = await prismaClient.tag2.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags2Admin = await prismaClient.tag2.findMany({
            skip,
            take: limitTag2Admin,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag2e que recebeu
        const data = {
            tags2Admin,
            totalTag2Admin: allTags2Admin.length,
            total_pagesTag2Admin: Math.ceil(allTags2Admin.length / limitTag2Admin),
            current_pageTag2Admin: pageTag2Admin,
        }

        return data;

    }
}

export { AdminListPageTag2Service }