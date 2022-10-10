import prismaClient from "../../prisma";

class ListTag5Service {
   async execute() {

      const tag5 = await prismaClient.tag5.findMany({
         select: {
            id: true,
            tagName5: true,
            createdAt: true
         },
         orderBy: {
            createdAt: 'desc'
         }
      })

      return tag5;
   }
}

export { ListTag5Service }