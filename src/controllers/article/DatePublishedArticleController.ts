import { Request, Response } from 'express';
import { DatePublishedArticleService } from '../../services/article/DatePublishedArticleService';


class DatePublishedArticleController {
    async handle(req: Request, res: Response) {
        const article_id = req.query.article_id as string;
        const { publishDate } = req.body;

        const alldatepublished = new DatePublishedArticleService();

        const articles = await alldatepublished.execute({
            article_id,
            publishDate,
        });

        return res.json(articles);
    }
}

export { DatePublishedArticleController }