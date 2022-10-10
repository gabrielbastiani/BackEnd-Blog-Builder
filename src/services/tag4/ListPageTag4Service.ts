import prismaClient from '../../prisma';

class ListPageTag4Service {
    async execute(pageTag4 = 1, limitTag4 = 3, name) {

        const skip = limitTag4 * (pageTag4 - 1);

        const allTags4 = await prismaClient.tag4.findMany({
            where: {
                name: name
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const tags4 = await prismaClient.tag4.findMany({
            where: {
                name: name
            },
            skip,
            take: limitTag4,
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag4e que recebeu
        const data = {
            tags4,
            totalTag4: allTags4.length,
            total_pagesTag4: Math.ceil(allTags4.length / limitTag4),
            current_pageTag4: pageTag4,
        }

        return data;

    }
}

export { ListPageTag4Service }