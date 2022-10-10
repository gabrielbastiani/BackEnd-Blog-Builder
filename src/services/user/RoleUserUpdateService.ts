import { Role } from '@prisma/client';
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: string;
}

class RoleUserUpdateService {
  async execute({ user_id }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where:{
        id: user_id,
      },
      data: {
        role: Role.ADMIN,
      }
    })

    return userUpdated;
  }
}

export { RoleUserUpdateService }