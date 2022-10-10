import { Request, Response } from 'express';
import { ListByTag1Service } from '../../services/article/ListByTag1Service';

class ListByTag1Controller {
    async handle(req: Request, res: Response) {

        const listByTag1Service = new ListByTag1Service();

        const { page, limit, tagName1 } = req.query;

        const articles = await listByTag1Service.execute(Number(page), Number(limit), tagName1);

        return res.json(articles);
    }
}

export { ListByTag1Controller }