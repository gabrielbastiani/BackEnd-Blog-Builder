import prismaClient from '../../prisma';

class ListExactUserService {
    async execute({ user_id }) {
        const exactUser = await prismaClient.user.findUnique({
            where: {
                id: user_id
            }
        })
        return exactUser;
    }
}

export { ListExactUserService }