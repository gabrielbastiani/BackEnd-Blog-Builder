import { Request, Response } from 'express';
import { ListPublishedArticlesService } from '../../services/article/ListPublishedArticlesService';

class ListPublishedArticleController {
    async handle(req: Request, res: Response) {
        const listPublishedArticlesService = new ListPublishedArticlesService();

        const { page, limit } = req.query;

        const data = listPublishedArticlesService.execute();

        const articles = await listPublishedArticlesService.execute(Number(page), Number(limit));

        return res.json(articles);
    }
}

export { ListPublishedArticleController }