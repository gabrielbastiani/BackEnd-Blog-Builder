import { Role } from '@prisma/client';
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  name: string;
  email: string;
}

class UserUpdateService {
  async execute({ user_id, name, email }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        name: name,
        email: email,
      },
      select:{
        id: true,
        name: true,
        email: true,
        role: true
      }
    })

    return userUpdated;
  }
}

export { UserUpdateService }
