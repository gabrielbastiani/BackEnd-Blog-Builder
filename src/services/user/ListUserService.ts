import prismaClient from "../../prisma";

class ListUserService {
   async execute() {

      const user = await prismaClient.user.findMany({
         select: {
            id: true,
            name: true,
            email: true,
            photo: true,
            created_at: true,
            authenticated: true,
            role: true
         },
         orderBy: {
            created_at: 'desc'
         }
      })

      return user;
   }
}

export { ListUserService }