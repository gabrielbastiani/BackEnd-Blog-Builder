import prismaClient from "../../prisma";

class ListTag3Service {
   async execute() {

      const tag3 = await prismaClient.tag3.findMany({
         select: {
            id: true,
            tagName3: true,
            createdAt: true
         },
         orderBy: {
            createdAt: 'desc'
         }
      })

      return tag3;
   }
}

export { ListTag3Service }