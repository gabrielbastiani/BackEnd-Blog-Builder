import { Request, Response } from 'express';
import { ArticlesAllService } from '../../services/article/ArticlesAllService';

class ArticlesAllController {
    async handle(req: Request, res: Response) {
        const article_id = req.query.article_id as string;

        const listAllArticles = new ArticlesAllService();
        
        const articles = await listAllArticles.execute({
            article_id
        });

        return res.json(articles);
    }
}

export { ArticlesAllController }