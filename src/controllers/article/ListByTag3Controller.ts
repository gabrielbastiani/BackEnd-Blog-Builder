import { Request, Response } from 'express';
import { ListByTag3Service } from '../../services/article/ListByTag3Service';

class ListByTag3Controller {
    async handle(req: Request, res: Response) {

        const listByTag3Service = new ListByTag3Service();

        const { page, limit, tagName3 } = req.query;

        const articles = await listByTag3Service.execute(Number(page), Number(limit), tagName3);

        return res.json(articles);
    }
}

export { ListByTag3Controller }