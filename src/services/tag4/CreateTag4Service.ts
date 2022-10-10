import prismaClient from "../../prisma";

interface Tag4Request {
  tagName4: string;
  name: string;
}

class CreateTag4Service {
  async execute({ tagName4, name }: Tag4Request){
    
    if(tagName4 === ''){
      throw new Error('tagName4 invalid')
    }

    const tag4 = await prismaClient.tag4.create({
      data:{
        tagName4: tagName4,
        name: name
      },
      select:{
        id: true,
        tagName4: true
      }
    })


    return tag4;

  }
}

export { CreateTag4Service }