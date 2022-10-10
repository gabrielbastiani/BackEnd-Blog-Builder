import { Request, Response } from 'express';
import { AdminListPageTag1Service } from '../../services/tag1/AdminListPageTag1Service';

class AdminListPageTag1Controller {
    async handle(req: Request, res: Response) {
        const adminlistPageTag1Service = new AdminListPageTag1Service();

        const { pageTag1Admin, limitTag1Admin } = req.query;

        const tag1Admin = await adminlistPageTag1Service.execute(Number(pageTag1Admin), Number(limitTag1Admin));

        return res.json(tag1Admin);
    }
}

export { AdminListPageTag1Controller }