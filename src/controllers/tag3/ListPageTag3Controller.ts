import { Request, Response } from 'express';
import { ListPageTag3Service } from '../../services/tag3/ListPageTag3Service';

class ListPageTag3Controller {
    async handle(req: Request, res: Response) {
        const listPageTag3Service = new ListPageTag3Service();

        const { pageTag3, limitTag3, name } = req.query;

        const tag3 = await listPageTag3Service.execute(Number(pageTag3), Number(limitTag3), name);

        return res.json(tag3);
    }
}

export { ListPageTag3Controller }