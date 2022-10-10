import prismaClient from '../../prisma';

class AdminListPageCategoryService {
    async execute(pageAdmin = 1, limitAdmin = 4) {

        const skip = limitAdmin * (pageAdmin - 1);

        const allCategorysAdmin = await prismaClient.category.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const categsAdmin = await prismaClient.category.findMany({
            skip,
            take: limitAdmin,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            categsAdmin,
            totalAdmin: allCategorysAdmin.length,
            total_pagesAdmin: Math.ceil(allCategorysAdmin.length / limitAdmin),
            current_pageAdmin: pageAdmin,
        }

        return data;

    }
}

export { AdminListPageCategoryService }