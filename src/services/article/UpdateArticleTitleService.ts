import prismaClient from '../../prisma';

interface ArticleRequest {
  article_id: any;
  title: string,
}

class UpdateArticleTitleService {
  async execute({ article_id, title }: ArticleRequest) {
    const articleUpdate = await prismaClient.article.update({
      where: {
        id: String(article_id),
      },
      data: {
        title: title
      }
    })

    return articleUpdate;
  }
}

export { UpdateArticleTitleService }