import prismaClient from "../../prisma";

interface Tag3Request{
   tag3_id: any;
   tagName3: string;
}

class UpdateTag3Service{
  async execute({ tag3_id, tagName3 }: Tag3Request){
    const updateTag3 = await prismaClient.tag3.update({
      where:{
        id: String(tag3_id)
      },
      data:{
        tagName3: tagName3,
      },
      select:{
        id: true,
        tagName3: true,
      }
    })

    return updateTag3;

  }
}

export { UpdateTag3Service }