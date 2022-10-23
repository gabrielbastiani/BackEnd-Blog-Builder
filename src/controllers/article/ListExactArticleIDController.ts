import { Request, Response } from 'express';
import { ListExactArticleIDService } from '../../services/article/ListExactArticleIDService';

class ListExactArticleIDController {
    async handle(req: Request, res: Response) {
        const { article_id } = req.query;
        const listExactArticleIDService = new ListExactArticleIDService();
        const article = await listExactArticleIDService.execute({ article_id });

        return res.json(article);
    }
}

export { ListExactArticleIDController }