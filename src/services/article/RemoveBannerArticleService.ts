import prismaClient from "../../prisma";

interface ArticleRequest{
  article_id: string;
}

class RemoveBannerArticleService{
  async execute({ article_id }: ArticleRequest){

    const articleBanner = await prismaClient.article.findUnique({
      where:{
        id: article_id 
      }
    })

    return articleBanner;
    
  }
}

export { RemoveBannerArticleService }