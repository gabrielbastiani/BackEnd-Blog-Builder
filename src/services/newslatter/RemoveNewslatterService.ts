import prismaClient from "../../prisma";

interface NewslatterRequest{
  newslatter_id: string;
}

class RemoveNewslatterService{
  async execute({ newslatter_id }: NewslatterRequest){

      const newslatter = await prismaClient.newslatter.delete({
        where:{
          id: newslatter_id 
        }
      })
  
      return newslatter;
    }
    
}

export { RemoveNewslatterService }