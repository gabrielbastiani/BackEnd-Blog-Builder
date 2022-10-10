import prismaClient from '../../prisma';


interface Tag3Request{
    tag3_id: string;
}

class Tag3AllService {
    async execute({tag3_id}: Tag3Request) {
        const findAll = await prismaClient.tag3.findMany({
            where: {
                id: tag3_id,
            }
        })
        return findAll;
    }
}

export { Tag3AllService }