import prismaClient from "../../prisma";

interface Tag3Request {
  tagName3: string;
  name: string;
}

class CreateTag3Service {
  async execute({ tagName3, name }: Tag3Request){
    
    if(tagName3 === ''){
      throw new Error('tagName3 invalid')
    }

    const tag3 = await prismaClient.tag3.create({
      data:{
        tagName3: tagName3,
        name: name
      },
      select:{
        id: true,
        tagName3: true
      }
    })


    return tag3;

  }
}

export { CreateTag3Service }