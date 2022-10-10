import prismaClient from '../../prisma';


interface Tag2Request{
    tag2_id: string;
}

class Tag2AllService {
    async execute({tag2_id}: Tag2Request) {
        const findAll = await prismaClient.tag2.findMany({
            where: {
                id: tag2_id,
            }
        })
        return findAll;
    }
}

export { Tag2AllService }