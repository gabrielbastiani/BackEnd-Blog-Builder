import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  photo: string;
}

class PhotoUserUpdateService {
  async execute({ user_id, photo }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        photo: photo,
      },
      select:{
        photo: true
      }
    })

    return userUpdated;
  }
}

export { PhotoUserUpdateService }
