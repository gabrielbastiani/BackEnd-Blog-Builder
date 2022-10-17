import prismaClient from '../../prisma';

interface ArticleRequest {
  article_id: any;
  categoryName: string;
}

class UpdateArticleCategoryService {
  async execute({ article_id, categoryName }: ArticleRequest) {
    const articleUpdate = await prismaClient.article.update({
      where: {
        id: String(article_id),
      },
      data: {
        categoryName: categoryName,
      }
    })

    return articleUpdate;
  }
}

export { UpdateArticleCategoryService }