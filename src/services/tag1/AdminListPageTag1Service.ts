import prismaClient from '../../prisma';

class AdminListPageTag1Service {
    async execute(pageTag1Admin = 1, limitTag1Admin = 3) {

        const skip = limitTag1Admin * (pageTag1Admin - 1);

        const allTags1Admin = await prismaClient.tag1.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags1Admin = await prismaClient.tag1.findMany({
            skip,
            take: limitTag1Admin,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag1e que recebeu
        const data = {
            tags1Admin,
            totalTag1Admin: allTags1Admin.length,
            total_pagesTag1Admin: Math.ceil(allTags1Admin.length / limitTag1Admin),
            current_pageTag1Admin: pageTag1Admin,
        }

        return data;

    }
}

export { AdminListPageTag1Service }