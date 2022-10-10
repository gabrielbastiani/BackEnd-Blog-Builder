import { Request, Response } from 'express';
import { ListExactArticleService } from '../../services/article/ListExactArticleService';

class ListExactArticleController {
    async handle(req: Request, res: Response) {
        const { article_id } = req.query;
        const listExactArticleService = new ListExactArticleService();
        const article = await listExactArticleService.execute({ article_id });

        return res.json(article);
    }
}

export { ListExactArticleController }