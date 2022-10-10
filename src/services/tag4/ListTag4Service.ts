import prismaClient from "../../prisma";

class ListTag4Service {
   async execute() {

      const tag4 = await prismaClient.tag4.findMany({
         select: {
            id: true,
            tagName4: true,
            createdAt: true
         },
         orderBy: {
            createdAt: 'desc'
         }
      })

      return tag4;
   }
}

export { ListTag4Service }