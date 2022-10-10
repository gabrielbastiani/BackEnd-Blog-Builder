import prismaClient from "../../prisma";

interface CategoryRequest {
  categoryName: string;
  name: string;
}

class CreateCategoryService {
  async execute({ categoryName, name }: CategoryRequest){
    
    if(categoryName === ''){
      throw new Error('categoryName invalid')
    }

    const category = await prismaClient.category.create({
      data:{
        categoryName: categoryName,
        name: name,
      },
      select:{
        id: true,
        categoryName: true,
        name: true
      }
    })


    return category;

  }
}

export { CreateCategoryService }