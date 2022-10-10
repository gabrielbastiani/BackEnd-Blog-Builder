import prismaClient from "../../prisma";

interface ArticleRequest{
  article_id: string;
}

class RemoveArticleService{
  async execute({ article_id }: ArticleRequest){

    const article = await prismaClient.article.delete({
      where:{
        id: article_id 
      }
    })

    return article;
    
  }
}

export { RemoveArticleService }