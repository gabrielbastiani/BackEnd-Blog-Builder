import prismaClient from '../../prisma';

interface ArticleRequest {
  article_id: any;
  banner: string;
}

class UpdateBannerArticleService {
  async execute({ article_id, banner }: ArticleRequest) {
    const articleUpdate = await prismaClient.article.update({
      where: {
        id: String(article_id),
      },
      data: {
        banner: banner,
      }
    })

    return articleUpdate;
  }
}

export { UpdateBannerArticleService }