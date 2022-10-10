import prismaClient from '../../prisma';

class ListPageTag2Service {
    async execute(pageTag2 = 1, limitTag2 = 3, name) {

        const skip = limitTag2 * (pageTag2 - 1);

        const allTags2 = await prismaClient.tag2.findMany({
            where: {
                name: name
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags2 = await prismaClient.tag2.findMany({
            where: {
                name: name
            },
            skip,
            take: limitTag2,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag2e que recebeu
        const data = {
            tags2,
            totalTag2: allTags2.length,
            total_pagesTag2: Math.ceil(allTags2.length / limitTag2),
            current_pageTag2: pageTag2,
        }

        return data;

    }
}

export { ListPageTag2Service }