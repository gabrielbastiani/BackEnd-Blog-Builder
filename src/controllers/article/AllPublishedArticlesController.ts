import { Request, Response } from 'express';
import { AllPublishedArticlesService } from '../../services/article/AllPublishedArticlesService';

class AllPublishedArticlesController {
    async handle(req: Request, res: Response) {
        const listAllArticles = new AllPublishedArticlesService();
        const articles = await listAllArticles.execute();

        return res.json(articles);
    }
}

export { AllPublishedArticlesController }