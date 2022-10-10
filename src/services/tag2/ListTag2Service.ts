import prismaClient from "../../prisma";

class ListTag2Service {
   async execute() {

      const tag2 = await prismaClient.tag2.findMany({
         select: {
            id: true,
            tagName2: true,
            createdAt: true
         },
         orderBy: {
            createdAt: 'desc'
         }
      })

      return tag2;
   }
}

export { ListTag2Service }