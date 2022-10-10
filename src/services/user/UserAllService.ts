import prismaClient from "../../prisma";


interface UsersRequest{
   user_id: string;
}

class UserAllService {
   async execute({user_id}: UsersRequest) {
      const user = await prismaClient.user.findMany({
         where: {
            id: user_id,
         }
      })

      return user;
   }
}

export { UserAllService }