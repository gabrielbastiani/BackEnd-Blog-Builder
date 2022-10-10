import prismaClient from "../../prisma";

class ListTag1Service {
   async execute() {

      const tag1 = await prismaClient.tag1.findMany({
         select: {
            id: true,
            tagName1: true,
            createdAt: true
         },
         orderBy: {
            createdAt: 'desc'
         }
      })

      return tag1;
   }
}

export { ListTag1Service }