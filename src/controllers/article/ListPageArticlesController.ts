import { Request, Response } from 'express';
import { ListPageArticlesService } from '../../services/article/ListPageArticlesService';

class ListPageArticlesController {
    async handle(req: Request, res: Response) {

        const listPageArticlesService = new ListPageArticlesService();

        const { page, limit, name } = req.query;

        const articles = await listPageArticlesService.execute(Number(page), Number(limit), name);

        return res.json(articles);
    }
}

export { ListPageArticlesController }