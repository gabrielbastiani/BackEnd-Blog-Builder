import prismaClient from '../../prisma';

interface ArticleRequest {
  article_id: any;
  tagName1: string;
  tagName2: string;
  tagName3: string;
  tagName4: string;
  tagName5: string;
}

class UpdateArticleTagsService {
  async execute({ article_id, tagName1, tagName2, tagName3, tagName4, tagName5 }: ArticleRequest) {
    const articleUpdate = await prismaClient.article.update({
      where: {
        id: String(article_id),
      },
      data: {
        tagName1: tagName1,
        tagName2: tagName2,
        tagName3: tagName3,
        tagName4: tagName4,
        tagName5: tagName5,
      }
    })

    return articleUpdate;
  }
}

export { UpdateArticleTagsService }