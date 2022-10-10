import prismaClient from '../../prisma';


interface NewslatterRequest{
    newslatter_id: string;
}

class NewslatterAllService {
    async execute({newslatter_id}: NewslatterRequest) {
        const findAll = await prismaClient.newslatter.findMany({
            where: {
                id: newslatter_id,
            }
        })

        return findAll;
    }
}

export { NewslatterAllService }