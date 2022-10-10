import { Request, Response } from 'express';
import { AdminListPageTag4Service } from '../../services/tag4/AdminListPageTag4Service';

class AdminListPageTag4Controller {
    async handle(req: Request, res: Response) {
        const adminlistPageTag4Service = new AdminListPageTag4Service();

        const { pageTag4Admin, limitTag4Admin } = req.query;

        const tag4Admin = await adminlistPageTag4Service.execute(Number(pageTag4Admin), Number(limitTag4Admin));

        return res.json(tag4Admin);
    }
}

export { AdminListPageTag4Controller }