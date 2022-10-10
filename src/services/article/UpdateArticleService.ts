import prismaClient from '../../prisma';

interface ArticleRequest {
  article_id: any;
  title: string,
  description: string;
  banner: string;
  categoryName: string;
  tagName1: string;
  tagName2: string;
  tagName3: string;
  tagName4: string;
  tagName5: string;
}

class UpdateArticleService {
  async execute({ article_id, title, description, banner, categoryName, tagName1, tagName2, tagName3, tagName4, tagName5 }: ArticleRequest) {
    const articleUpdate = await prismaClient.article.update({
      where: {
        id: String(article_id),
      },
      data: {
        title: title,
        description: description,
        banner: banner,
        categoryName: categoryName,
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

export { UpdateArticleService }