import { Request, Response } from 'express';
import { ListPageTag5Service } from '../../services/tag5/ListPageTag5Service';

class ListPageTag5Controller {
    async handle(req: Request, res: Response) {
        const listPageTag5Service = new ListPageTag5Service();

        const { pageTag5, limitTag5, name } = req.query;

        const tag5 = await listPageTag5Service.execute(Number(pageTag5), Number(limitTag5), name);

        return res.json(tag5);
    }
}

export { ListPageTag5Controller }