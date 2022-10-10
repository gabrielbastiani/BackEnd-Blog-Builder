import { Request, Response } from 'express';
import { AdminListPageTag2Service } from '../../services/tag2/AdminListPageTag2Service';

class AdminListPageTag2Controller {
    async handle(req: Request, res: Response) {
        const adminlistPageTag2Service = new AdminListPageTag2Service();

        const { pageTag2Admin, limitTag2Admin } = req.query;

        const tag2Admin = await adminlistPageTag2Service.execute(Number(pageTag2Admin), Number(limitTag2Admin));

        return res.json(tag2Admin);
    }
}

export { AdminListPageTag2Controller }