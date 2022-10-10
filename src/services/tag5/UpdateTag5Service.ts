import prismaClient from "../../prisma";

interface Tag5Request{
   tag5_id: any;
   tagName5: string;
}

class UpdateTag5Service{
  async execute({ tag5_id, tagName5 }: Tag5Request){
    const updateTag5 = await prismaClient.tag5.update({
      where:{
        id: String(tag5_id)
      },
      data:{
        tagName5: tagName5,
      },
      select:{
        id: true,
        tagName5: true,
      }
    })

    return updateTag5;

  }
}

export { UpdateTag5Service }