import prismaClient from '../../prisma';

class ListPageCategoryService {
    async execute(page = 1, limit = 4, name) {

        const skip = limit * (page - 1);

        const allCategorys = await prismaClient.category.findMany({
            where: {
                name: name
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const categs = await prismaClient.category.findMany({
            where: {
                name: name
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            categs,
            total: allCategorys.length,
            total_pages: Math.ceil(allCategorys.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ListPageCategoryService }