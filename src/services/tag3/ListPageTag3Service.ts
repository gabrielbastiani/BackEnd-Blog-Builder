import prismaClient from '../../prisma';

class ListPageTag3Service {
    async execute(pageTag3 = 1, limitTag3 = 3, name) {

        const skip = limitTag3 * (pageTag3 - 1);

        const allTags3 = await prismaClient.tag3.findMany({
            where: {
                name: name
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags3 = await prismaClient.tag3.findMany({
            where: {
                name: name
            },
            skip,
            take: limitTag3,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag3e que recebeu
        const data = {
            tags3,
            totalTag3: allTags3.length,
            total_pagesTag3: Math.ceil(allTags3.length / limitTag3),
            current_pageTag3: pageTag3,
        }

        return data;

    }
}

export { ListPageTag3Service }