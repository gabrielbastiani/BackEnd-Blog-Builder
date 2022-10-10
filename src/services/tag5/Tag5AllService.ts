import prismaClient from '../../prisma';


interface Tag5Request{
    tag5_id: string;
}

class Tag5AllService {
    async execute({tag5_id}: Tag5Request) {
        const findAll = await prismaClient.tag5.findMany({
            where: {
                id: tag5_id,
            }
        })
        return findAll;
    }
}

export { Tag5AllService }