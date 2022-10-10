import prismaClient from '../../prisma';

class ListPageTag1Service {
    async execute(pageTag1 = 1, limitTag1 = 3, name) {

        const skip = limitTag1 * (pageTag1 - 1);

        const allTags1 = await prismaClient.tag1.findMany({
            where: {
                name: name
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags1 = await prismaClient.tag1.findMany({
            where: {
                name: name
            },
            skip,
            take: limitTag1,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag1e que recebeu
        const data = {
            tags1,
            totalTag1: allTags1.length,
            total_pagesTag1: Math.ceil(allTags1.length / limitTag1),
            current_pageTag1: pageTag1,
        }

        return data;

    }
}

export { ListPageTag1Service }