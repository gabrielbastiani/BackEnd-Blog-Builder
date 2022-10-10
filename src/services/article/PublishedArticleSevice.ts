import prismaClient from "../../prisma";

interface ArticleRequest{
  article_id: string;
}

class PublishedArticleSevice{
  async execute({ article_id }: ArticleRequest){
    const article = await prismaClient.article.update({
      where:{
        id: article_id
      },
      data:{
         published: true
      },
    })

    return article;

  }
}

export { PublishedArticleSevice }