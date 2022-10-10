import { Request, Response } from 'express';
import { AllDatePublisheService } from '../../services/article/AllDatePublisheService';


class AllDatePublishedController {
    async handle(req: Request, res: Response) {
        const article_id = req.query.article_id as string;
        const { publishDate } = req.body;

        const alldatepublished = new AllDatePublisheService();

        const articles = await alldatepublished.execute({
            article_id,
            publishDate,
        });

        return res.json(articles);
    }
}

export { AllDatePublishedController }