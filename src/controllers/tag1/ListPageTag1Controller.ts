import { Request, Response } from 'express';
import { ListPageTag1Service } from '../../services/tag1/ListPageTag1Service';

class ListPageTag1Controller {
    async handle(req: Request, res: Response) {
        const listPageTag1Service = new ListPageTag1Service();

        const { pageTag1, limitTag1, name } = req.query;

        const tag1 = await listPageTag1Service.execute(Number(pageTag1), Number(limitTag1), name);

        return res.json(tag1);
    }
}

export { ListPageTag1Controller }