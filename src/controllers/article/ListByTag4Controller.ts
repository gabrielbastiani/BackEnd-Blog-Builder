import { Request, Response } from 'express';
import { ListByTag4Service } from '../../services/article/ListByTag4Service';

class ListByTag4Controller {
    async handle(req: Request, res: Response) {

        const listByTag4Service = new ListByTag4Service();

        const { page, limit, tagName4 } = req.query;

        const articles = await listByTag4Service.execute(Number(page), Number(limit), tagName4);

        return res.json(articles);
    }
}

export { ListByTag4Controller }