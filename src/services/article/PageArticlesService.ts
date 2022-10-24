import prismaClient from '../../prisma';

interface ArtcleRequest {
  title: string;
}

class PageArticlesService {
  async execute({title}: ArtcleRequest) {
    const post = await prismaClient.article.findUnique({
      where: {
        title: title,
      }
    });

    const postPrevious = await prismaClient.article.findFirst({
      where: {
        created_at: { lt: post?.created_at?.toISOString() },
        published: true
      },
      orderBy: {
        created_at: "desc",
      },
    });

    const postNext = await prismaClient.article.findFirst({
      where: {
        created_at: { gt: post?.created_at?.toISOString() },
        published: true
    },
      orderBy: {
        created_at: "asc",
      },
    });

    const dataPage = {
      post,
      postPrevious,
      postNext
    }

    return dataPage;
  }

}

export { PageArticlesService }