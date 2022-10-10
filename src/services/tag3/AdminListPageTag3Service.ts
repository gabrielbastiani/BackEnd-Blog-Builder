import prismaClient from '../../prisma';

class AdminListPageTag3Service {
    async execute(pageTag3Admin = 1, limitTag3Admin = 3) {

        const skip = limitTag3Admin * (pageTag3Admin - 1);

        const allTags3Admin = await prismaClient.tag3.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags3Admin = await prismaClient.tag3.findMany({
            skip,
            take: limitTag3Admin,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag3e que recebeu
        const data = {
            tags3Admin,
            totalTag3Admin: allTags3Admin.length,
            total_pagesTag3Admin: Math.ceil(allTags3Admin.length / limitTag3Admin),
            current_pageTag3Admin: pageTag3Admin,
        }

        return data;

    }
}

export { AdminListPageTag3Service }