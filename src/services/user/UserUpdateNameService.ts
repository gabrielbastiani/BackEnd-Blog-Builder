import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  name: string;
}

class UserUpdateNameService {
  async execute({ user_id, name }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        name: name,
      },
      select:{
        id: true,
        name: true,
        role: true
      }
    })

    return userUpdated;
  }
}

export { UserUpdateNameService }
