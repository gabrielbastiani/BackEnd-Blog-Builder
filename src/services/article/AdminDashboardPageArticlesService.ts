import prismaClient from '../../prisma';


class AdminDashboardPageArticlesService {
  async execute(pageAdmin = 1, limitAdmin = 4) {

    const skip = limitAdmin * (pageAdmin - 1);

    //Pegar quantidade de todos os artigos
    const allarticlesAdmin = await prismaClient.article.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    const admin = await prismaClient.article.findMany({
      skip,
      take: limitAdmin,
      orderBy: {
        created_at: 'desc'
      }
    });

    // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
    const data = {
      admin,
      totalAdmin: allarticlesAdmin.length,
      total_pagesAdmin: Math.ceil(allarticlesAdmin.length / limitAdmin),
      current_pageAdmin: pageAdmin,
    }

    return data;

  }

}

export { AdminDashboardPageArticlesService }