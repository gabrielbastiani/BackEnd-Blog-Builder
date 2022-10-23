import { Request, Response } from 'express'
import { PageArticlesService } from '../../services/article/PageArticlesService'

class PageArticlesController {
  async handle(req: Request, res: Response) {
    const title = req.query.title as string;

    const articlePage = new PageArticlesService();

    const articles = await articlePage.execute({
      title
    });

    return res.json(articles);
  }
}

export { PageArticlesController }