import { Request, Response } from 'express';
import { ListPageTag4Service } from '../../services/tag4/ListPageTag4Service';

class ListPageTag4Controller {
    async handle(req: Request, res: Response) {
        const listPageTag4Service = new ListPageTag4Service();

        const { pageTag4, limitTag4, name } = req.query;

        const tag4 = await listPageTag4Service.execute(Number(pageTag4), Number(limitTag4), name);

        return res.json(tag4);
    }
}

export { ListPageTag4Controller }