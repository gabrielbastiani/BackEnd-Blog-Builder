import prismaClient from "../../prisma";

interface Tag1Request{
   tag1_id: any;
   tagName1: string;
}

class UpdateTag1Service{
  async execute({ tag1_id, tagName1 }: Tag1Request){
    const updateTag1 = await prismaClient.tag1.update({
      where:{
        id: String(tag1_id)
      },
      data:{
        tagName1: tagName1,
      },
      select:{
        id: true,
        tagName1: true,
      }
    })

    return updateTag1;

  }
}

export { UpdateTag1Service }