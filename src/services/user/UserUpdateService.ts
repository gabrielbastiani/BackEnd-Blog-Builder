import { Role } from '@prisma/client';
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  name: string;
  email: string;
  photo: string;
  role: string;
}

class UserUpdateService {
  async execute({ user_id, name, email, photo }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        name: name,
        email: email,
        photo: photo,
        role: Role.USER
      },
      select:{
        id: true,
        photo: true,
        name: true,
        email: true,
        role: true
      }
    })

    return userUpdated;
  }
}

export { UserUpdateService }
