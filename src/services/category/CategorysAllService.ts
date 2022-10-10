import prismaClient from '../../prisma';


interface CategoryProps{
    category_id: string;
}

class CategorysAllService {
    async execute({category_id}: CategoryProps) {
        const findAll = await prismaClient.category.findMany({
            where: {
                id: category_id,
            }
        })
        return findAll;
    }
}

export { CategorysAllService }