import prismaClient from '../../prisma';


interface Tag1Request{
    tag1_id: string;
}

class Tag1AllService {
    async execute({tag1_id}: Tag1Request) {
        const findAll = await prismaClient.tag1.findMany({
            where: {
                id: tag1_id,
            }
        })
        return findAll;
    }
}

export { Tag1AllService }