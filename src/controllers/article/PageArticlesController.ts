import { Request, Response } from 'express'
import { PageArticlesService } from '../../services/article/PageArticlesService'

class PageArticlesController {
  async handle(req: Request, res: Response) {
    const article_id = req.query.article_id as string;

    const articlePage = new PageArticlesService();

    const articles = await articlePage.execute({
      article_id
    });

    return res.json(articles);
  }
}

export { PageArticlesController }