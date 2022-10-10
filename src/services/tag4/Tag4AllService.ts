import prismaClient from '../../prisma';


interface Tag4Request{
    tag4_id: string;
}

class Tag4AllService {
    async execute({tag4_id}: Tag4Request) {
        const findAll = await prismaClient.tag4.findMany({
            where: {
                id: tag4_id,
            }
        })
        return findAll;
    }
}

export { Tag4AllService }