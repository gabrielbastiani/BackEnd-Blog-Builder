import prismaClient from '../../prisma';

class AdminListPageTag4Service {
    async execute(pageTag4Admin = 1, limitTag4Admin = 3) {

        const skip = limitTag4Admin * (pageTag4Admin - 1);

        const allTags4Admin = await prismaClient.tag4.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags4Admin = await prismaClient.tag4.findMany({
            skip,
            take: limitTag4Admin,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag4e que recebeu
        const data = {
            tags4Admin,
            totalTag4Admin: allTags4Admin.length,
            total_pagesTag4Admin: Math.ceil(allTags4Admin.length / limitTag4Admin),
            current_pageTag4Admin: pageTag4Admin,
        }

        return data;

    }
}

export { AdminListPageTag4Service }