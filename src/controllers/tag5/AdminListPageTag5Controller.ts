import { Request, Response } from 'express';
import { AdminListPageTag5Service } from '../../services/tag5/AdminListPageTag5Service';

class AdminListPageTag5Controller {
    async handle(req: Request, res: Response) {
        const adminlistPageTag5Service = new AdminListPageTag5Service();

        const { pageTag5Admin, limitTag5Admin } = req.query;

        const tag5Admin = await adminlistPageTag5Service.execute(Number(pageTag5Admin), Number(limitTag5Admin));

        return res.json(tag5Admin);
    }
}

export { AdminListPageTag5Controller }