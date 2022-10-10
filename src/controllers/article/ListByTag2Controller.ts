import { Request, Response } from 'express';
import { ListByTag2Service } from '../../services/article/ListByTag2Service';

class ListByTag2Controller {
    async handle(req: Request, res: Response) {

        const listByTag2Service = new ListByTag2Service();

        const { page, limit, tagName2 } = req.query;

        const articles = await listByTag2Service.execute(Number(page), Number(limit), tagName2);

        return res.json(articles);
    }
}

export { ListByTag2Controller }