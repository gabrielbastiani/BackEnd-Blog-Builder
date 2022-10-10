import { Request, Response } from 'express';
import { ListPageTag2Service } from '../../services/tag2/ListPageTag2Service';

class ListPageTag2Controller {
    async handle(req: Request, res: Response) {
        const listPageTag2Service = new ListPageTag2Service();

        const { pageTag2, limitTag2, name } = req.query;

        const tag2 = await listPageTag2Service.execute(Number(pageTag2), Number(limitTag2), name);

        return res.json(tag2);
    }
}

export { ListPageTag2Controller }