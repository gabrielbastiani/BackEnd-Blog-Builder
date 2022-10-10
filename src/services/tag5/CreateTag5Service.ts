import prismaClient from "../../prisma";

interface Tag5Request {
  tagName5: string;
  name: string;
}

class CreateTag5Service {
  async execute({ tagName5, name }: Tag5Request){
    
    if(tagName5 === ''){
      throw new Error('tagName5 invalid')
    }

    const tag5 = await prismaClient.tag5.create({
      data:{
        tagName5: tagName5,
        name: name
      },
      select:{
        id: true,
        tagName5: true
      }
    })


    return tag5;

  }
}

export { CreateTag5Service }