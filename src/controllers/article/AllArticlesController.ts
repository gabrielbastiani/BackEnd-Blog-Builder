import { Request, Response } from 'express';
import { AllArticlesService } from '../../services/article/AllArticlesService';

class AllArticlesController {
    async handle(req: Request, res: Response) {
        const listAllArticles = new AllArticlesService();
        const articles = await listAllArticles.execute();

        return res.json(articles);
    }
}

export { AllArticlesController }