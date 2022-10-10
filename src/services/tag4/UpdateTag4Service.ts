import prismaClient from "../../prisma";

interface Tag4Request{
   tag4_id: any;
   tagName4: string;
}

class UpdateTag4Service{
  async execute({ tag4_id, tagName4 }: Tag4Request){
    const updateTag4 = await prismaClient.tag4.update({
      where:{
        id: String(tag4_id)
      },
      data:{
        tagName4: tagName4,
      },
      select:{
        id: true,
        tagName4: true,
      }
    })

    return updateTag4;

  }
}

export { UpdateTag4Service }