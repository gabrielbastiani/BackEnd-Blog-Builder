import prismaClient from "../../prisma";

interface Tag2Request {
  tagName2: string;
  name: string;
}

class CreateTag2Service {
  async execute({ tagName2, name }: Tag2Request){
    
    if(tagName2 === ''){
      throw new Error('tagName2 invalid')
    }

    const tag2 = await prismaClient.tag2.create({
      data:{
        tagName2: tagName2,
        name: name
      },
      select:{
        id: true,
        tagName2: true
      }
    })


    return tag2;

  }
}

export { CreateTag2Service }