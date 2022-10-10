import prismaClient from '../../prisma';


class ListByTag3Service {
  async execute(page = 1, limit = 4, tagName3) {

    const skip = limit * (page - 1);

    //Pegar quantidade de todos os artigos
    const allarticles = await prismaClient.article.findMany({
      where: {
        tagName3: tagName3
     },
      orderBy: {
        created_at: 'desc'
      }
    });

    const articles = await prismaClient.article.findMany({
      where: {
         tagName3: tagName3
     },
      skip,
      take: limit,
      orderBy: {
        created_at: 'desc'
      }
    });

    // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
    const data = {
      articles,
      total: allarticles.length,
      total_pages: Math.ceil(allarticles.length / limit),
      current_page: page,
    }

    return data;

  }

}

export { ListByTag3Service }