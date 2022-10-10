import prismaClient from '../../prisma';

class ListExactCategoryService {
    async execute({ categoryName }) {
        const exactCategory = await prismaClient.category.findUnique({
            where: {
                categoryName
            }
        })
        return exactCategory;
    }
}

export { ListExactCategoryService }