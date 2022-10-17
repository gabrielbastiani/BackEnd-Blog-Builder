import prismaClient from '../../prisma';

interface ArticleRequest {
  article_id: any;
  description: string;
}

class UpdateArticleDescriptionService {
  async execute({ article_id, description }: ArticleRequest) {
    const articleUpdate = await prismaClient.article.update({
      where: {
        id: String(article_id),
      },
      data: {
        description: description,
      }
    })

    return articleUpdate;
  }
}

export { UpdateArticleDescriptionService }