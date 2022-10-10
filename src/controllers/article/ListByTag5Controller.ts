import { Request, Response } from 'express';
import { ListByTag5Service } from '../../services/article/ListByTag5Service';

class ListByTag5Controller {
    async handle(req: Request, res: Response) {

        const listByTag5Service = new ListByTag5Service();

        const { page, limit, tagName5 } = req.query;

        const articles = await listByTag5Service.execute(Number(page), Number(limit), tagName5);

        return res.json(articles);
    }
}

export { ListByTag5Controller }