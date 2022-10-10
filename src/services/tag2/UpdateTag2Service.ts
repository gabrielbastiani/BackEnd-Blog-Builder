import prismaClient from "../../prisma";

interface Tag2Request{
   tag2_id: any;
   tagName2: string;
}

class UpdateTag2Service{
  async execute({ tag2_id, tagName2 }: Tag2Request){
    const updateTag2 = await prismaClient.tag2.update({
      where:{
        id: String(tag2_id)
      },
      data:{
        tagName2: tagName2,
      },
      select:{
        id: true,
        tagName2: true,
      }
    })

    return updateTag2;

  }
}

export { UpdateTag2Service }