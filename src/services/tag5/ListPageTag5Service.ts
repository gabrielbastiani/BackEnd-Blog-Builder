import prismaClient from '../../prisma';

class ListPageTag5Service {
    async execute(pageTag5 = 1, limitTag5 = 3, name) {

        const skip = limitTag5 * (pageTag5 - 1);

        const allTags5 = await prismaClient.tag5.findMany({
            where: {
                name: name
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags5 = await prismaClient.tag5.findMany({
            where: {
                name: name
            },
            skip,
            take: limitTag5,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag5e que recebeu
        const data = {
            tags5,
            totalTag5: allTags5.length,
            total_pagesTag5: Math.ceil(allTags5.length / limitTag5),
            current_pageTag5: pageTag5,
        }

        return data;

    }
}

export { ListPageTag5Service }