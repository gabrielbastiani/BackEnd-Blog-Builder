import { Request, Response } from 'express';
import { ListPageNewslatterService } from '../../services/newslatter/ListPageNewslatterService';

class ListPageNewslatterController {
    async handle(req: Request, res: Response) {
        const listPageNewslatterService = new ListPageNewslatterService();

        const { pageNews, limitNews } = req.query;

        const data = listPageNewslatterService.execute();

        const newslatter = await listPageNewslatterService.execute(Number(pageNews), Number(limitNews));

        return res.json(newslatter);
    }
}

export { ListPageNewslatterController }