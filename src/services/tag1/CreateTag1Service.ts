import prismaClient from "../../prisma";

interface Tag1Request {
  tagName1: string;
  name: string;
}

class CreateTag1Service {
  async execute({ tagName1, name }: Tag1Request){
    
    if(tagName1 === ''){
      throw new Error('tagName1 invalid')
    }

    const tag1 = await prismaClient.tag1.create({
      data:{
        tagName1: tagName1,
        name: name
      },
      select:{
        id: true,
        tagName1: true
      }
    })


    return tag1;

  }
}

export { CreateTag1Service }